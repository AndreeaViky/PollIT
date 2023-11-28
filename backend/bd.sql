-- baza de date 'app'
CREATE DATABASE app;

-- se comută pe baza de date 'app'
USE app;

-- tabela 'users'
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- tabela 'polls'
CREATE TABLE polls (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT NOT NULL,
    userId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(id)
);

-- tabela 'options' 
CREATE TABLE options (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pollId INT NOT NULL,
    optionText TEXT NOT NULL,
    FOREIGN KEY (pollId) REFERENCES polls(id)
);

-- tabela 'votes'
CREATE TABLE votes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    pollId INT NOT NULL,
    optionId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (pollId) REFERENCES polls(id),
    FOREIGN KEY (optionId) REFERENCES options(id)
);

-- utilizatorul 'app' cu parola 'password'
CREATE USER 'app'@'localhost' IDENTIFIED BY 'password';

-- se da utilizatorului 'app' acces complet la baza de date 'app'
GRANT ALL PRIVILEGES ON app.* TO 'app'@'localhost';

-- se aplica modificările de privilegii
FLUSH PRIVILEGES;