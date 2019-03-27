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
    res.status(200).json(cohort);
  } catch (error) {
    res.status(500).json(console.log(error));
  }
});

router.get('/', async (req, res) => {
  try {
    const cohorts = await db('cohorts');
    res.status(200).json(cohorts);
  } catch (error) {
    res.status(500).json(console.log(error));
  }
});

router.get('/:id', async (req, res) => {
  try {
    const cohort = await db('cohorts')
      .where({ id: req.params.id })
      .first();
    res.status(200).json(cohort);
  } catch (error) {
    res.status(500).json(console.log(error));
  }
});

// router.get('/:id/students', async (req, res) => {
//   try {
//     const cohort = await db('cohorts')
//       .where({ id: req.params.id })
//       .first();
//     res.status(200).json(cohort);
//   } catch (error) {
//     res.status(500).json(console.log(error));
//   }
// });

router.put('/:id', async (req, res) => {
  try {
    const cohort = await db('cohorts')
      .where({ id: req.params.id })
      .update(req.body);

    if (count > 0) {
      const cohort = await db('cohorts')
        .where({ id: req.params.id })
        .first();

      res.status(200).json(role);
    } else res.status(200).json(cohort);
  } catch (error) {
    res.status(500).json(console.log(error));
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const count = await db('cohorts')
      .where({ id: req.params.id })
      .del();

    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Cohort not found' });
    }
    res.status(200).json(cohort);
  } catch (error) {
    res.status(500).json(console.log(error));
  }
});

module.exports = router;
