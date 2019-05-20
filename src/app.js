const express = require('express');

const app = express();

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const {
  add,
} = require('./lib/numbers');

// app.get('/strings/hello/world', (req, res) => {
//   res.status(200).json({ result: 'Hello world!' });
// });

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-character/:string', (req, res) => {
  res.json({ result: firstCharacter(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  res.json({ result: firstCharacters(req.params.string, req.query.length) });
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const isNumeric = (string) => { return !Number.isNaN(parseInt(string)); };
  if (isNumeric(req.params.a) && isNumeric(req.params.b)) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.status(200).json({ result: add(a, b) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

module.exports = app;
