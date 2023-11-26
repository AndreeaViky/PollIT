require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect();

// Endpoint pentru ruta de bază '/'
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Endpoint Register
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  connection.query(
    "SELECT email FROM users WHERE email = ?",
    [email],
    async (error, results) => {
      if (error) {
        return res.status(500).send({ error: "Eroare server" });
      }

      if (results.length > 0) {
        return res
          .status(409)
          .send({ error: "That email address is already in use!" });
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        connection.query(
          "INSERT INTO users SET ?",
          { email: email, password: hashedPassword },
          (error, results) => {
            if (error) {
              return res
                .status(500)
                .send({ error: "Eroare la înregistrarea utilizatorului" });
            }
            res
              .status(201)
              .send({ message: "Utilizator înregistrat cu succes!" });
          }
        );
      }
    }
  );
});

// Endpoint Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  connection.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (error, results) => {
      if (
        error ||
        results.length === 0 ||
        !(await bcrypt.compare(password, results[0].password))
      ) {
        return res
          .status(401)
          .send({
            error: "The email address or password you entered is invalid",
          });
      }

      const token = jwt.sign({ id: results[0].id }, process.env.JWT_SECRET, {
        expiresIn: "8h",
      });
      res.status(200).send({ message: "Autentificat cu succes", token });
    }
  );
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server rulând pe portul ${PORT}`);
});
