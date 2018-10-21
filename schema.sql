DROP DATABASE IF EXISTS groceries3;
CREATE DATABASE groceries3;
USE groceries3;

CREATE TABLE mygroceries3 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item TEXT,
    quantity INT
);

INSERT INTO mygroceries3 (item, quantity) VALUES ('candy', 1);