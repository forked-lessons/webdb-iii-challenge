const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

// const db = knex(knexConfig);
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.status(200).json('Hello World from a route');
  } catch {}
});

module.exports = router;
