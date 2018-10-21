const express = require('express');
const app = express();
const port = process.env.port || 3000;
const bodyParser = require('body-parser');
const db = require('../database');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('client/dist'));

app.get('/groceries', (req, res) => {
  db.getAll((error, results) => {
    if (error) {
      res.status(404).send(err)
    } else {
      res.status(200).send(results);
    }
  });
});

app.post('/groceries', (req, res) => {
  db.insert(req.body.item, req.body.quantity, (error, results) => {
    if (error) {
      res.status(404).send(err);
    } else {
      res.status(201).send();
    }
  });
});

app.listen(port, () => {console.log(`Listening to port ${port}...`)});