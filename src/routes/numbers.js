const express = require('express');

const router = express.Router();

const {
  add,
  subtract,
  multiply,
  divide,
  remainder,
} = require('../lib/numbers');

router.get('/add/:a/and/:b', (req, res) => {
  const isNumeric = (string) => { return !Number.isNaN(parseInt(string)); };
  if (isNumeric(req.params.a) && isNumeric(req.params.b)) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.status(200).json({ result: add(a, b) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

router.get('/subtract/:b/from/:a', (req, res) => {
  const isNumeric = (string) => { return !Number.isNaN(parseInt(string)); };
  if (isNumeric(req.params.a) && isNumeric(req.params.b)) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.status(200).json({ result: subtract(a, b) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

router.post('/multiply/', (req, res) => {
  const { a, b } = req.body;
  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters \"a\" and \"b\" are required.' });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters \"a\" and \"b\" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(a, b) });
  }
});

router.post('/divide', (req, res) => {
  const { a, b } = req.body;
  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters \"a\" and \"b\" are required.' });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters \"a\" and \"b\" must be valid numbers.' });
  } else if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: divide(a, b) });
  }
});

router.post('/remainder', (req, res) => {
  if (req.query.a && req.query.b) {
    const { a, b } = req.query;
    res.status(200).json({ result: remainder(a, b) });
  } else {
    const { a, b } = req.body;
    if (a === undefined || b === undefined) {
      res.status(400).json({ error: 'Parameters \"a\" and \"b\" are required.' });
    } else if (isNaN(a) || isNaN(b)) {
      res.status(400).json({ error: 'Parameters must be valid numbers.' });
    } else if (b === 0) {
      res.status(400).json({ error: 'Unable to divide by 0.' });
    } else {
      res.status(200).json({ result: remainder(a, b) });
    }
  }
});

module.exports = router;
