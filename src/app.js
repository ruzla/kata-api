const express = require('express');

const app = express();
const { sayHello, uppercase } = require('./lib/strings');

// app.get('/strings/hello/world', (req, res) => {
//   res.status(200).json({ result: 'Hello world!' });
// });

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

module.exports = app;
