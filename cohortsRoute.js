const express = require('express');
const knex = require('knex');

const knexConfig = {
  client: 'sqlite3',
  connection: {
    filename: './data/lambda.db3'
  },
  useNullAsDefault: true // needed for sqlite
};

const db = knex(knexConfig);
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const [id] = await db('cohorts').insert(req.body);

    const cohort = await db('cohorts')
      .where({ id: id })
      .first();
    res.status(500).json(cohort);
  } catch (error) {
    const errors = {
      '19': 'Another record with that value exists'
    };
    const message = errors[error.errno] || 'We ran into an error';
    res.status(500).json({ message, error });
  }
});
router.get('/', async (req, res) => {
  try {
    const cohorts = await db('cohorts');
    res.status(500).json(cohorts);
  } catch (error) {
    res.status(500).json(console.log(error));
  }
});
module.exports = router;
