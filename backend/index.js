require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect();

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // doar token
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ error: "Email și parola sunt obligatorii" });
  }

  try {
    const users = await connection
      .promise()
      .query("SELECT email FROM users WHERE email = ?", [email]);

    if (users[0].length > 0) {
      return res
        .status(409)
        .send({ error: "Aceasta adresa de email este deja folosita!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await connection.promise().query("INSERT INTO users SET ?", {
      email: email,
      password: hashedPassword,
    });
    res.status(201).send({ message: "Utilizator înregistrat cu succes!" });
  } catch (error) {
    res.status(500).send({ error: "Eroare server" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ error: "Email and password are required" });
  }

  try {
    const results = await connection
      .promise()
      .query("SELECT * FROM users WHERE email = ?", [email]);
    const user = results[0][0];

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send({
        error: "Adresa de email sau parola introduse nu sunt valide.",
      });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "8h",
    });
    res.status(200).send({ message: "Autentificat cu succes", token });
  } catch (error) {
    res.status(500).send({ error: "Eroare server" });
  }
});

// creare poll
app.post("/polls", authenticateToken, async (req, res) => {
  const { question, options } = req.body;
  const userId = req.user.id;

  if (!question || !options || options.length < 3) {
    return res.status(400).send({ error: "Datele sondajului sunt invalide." });
  }

  try {
    const [pollResult] = await connection
      .promise()
      .query("INSERT INTO polls SET ?", { question, userId });

    const pollId = pollResult.insertId;
    await Promise.all(
      options.map((optionText) =>
        connection
          .promise()
          .query("INSERT INTO options SET ?", { pollId, optionText })
      )
    );

    res.status(201).send({ message: "Sondaj creat cu succes." });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Eroare la crearea sondajului." });
  }
});

// citire poll + optiuni 
app.get("/polls", async (req, res) => {
  try {
    const [polls] = await connection.promise().query("SELECT * FROM polls");

    for (const poll of polls) {
      const [options] = await connection.promise().query("SELECT * FROM options WHERE pollId = ?", [poll.id]);
      poll.options = options;
    }

    res.status(200).send(polls);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Eroare la încărcarea sondajelor." });
  }
});


// stergere poll
app.delete("/polls/:id", authenticateToken, async (req, res) => {
  const pollId = req.params.id;
  const userId = req.user.id;

  try {
    const [poll] = await connection
      .promise()
      .query("SELECT userId FROM polls WHERE id = ?", [pollId]);

    if (poll.length === 0 || poll[0].userId !== userId) {
      return res
        .status(403)
        .send({ error: "Nu aveți permisiunea de a șterge acest sondaj." });
    }

    // șterge înregistrările din votes și options pt poll
    await connection
      .promise()
      .query("DELETE FROM votes WHERE pollId = ?", [pollId]);
    await connection
      .promise()
      .query("DELETE FROM options WHERE pollId = ?", [pollId]);

    // șterge poll
    await connection
      .promise()
      .query("DELETE FROM polls WHERE id = ?", [pollId]);

    res.status(200).send({ message: "Sondaj șters cu succes." });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Eroare la ștergerea sondajului." });
  }
});

// votare poll
app.patch("/polls/vote/:id", authenticateToken, async (req, res) => {
  const pollId = req.params.id;
  const { optionId } = req.body;
  const userId = req.user.id;

  try {
    const [vote] = await connection
      .promise()
      .query("SELECT id FROM votes WHERE userId = ? AND pollId = ?", [
        userId,
        pollId,
      ]);
    if (vote.length > 0) {
      return res.status(409).send({ error: "Ați votat deja în acest sondaj." });
    }

    await connection
      .promise()
      .query("INSERT INTO votes SET ?", { userId, pollId, optionId });
    res.status(200).send({ message: "Vot înregistrat cu succes." });
  } catch (error) {
    res.status(500).send({ error: "Eroare la votarea sondajului." });
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server rulând pe portul ${PORT}`);
});