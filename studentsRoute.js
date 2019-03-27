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
    const [id] = await db('students').insert(req.body);
    const student = await db('students')
      .where({ id: id })
      .first();
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json(console.log(error));
  }
});

router.get('/', async (req, res) => {
  try {
    const students = await db('students');
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json(console.log(error));
  }
});

router.get('/:id', async (req, res) => {
  try {
    const student = await db('students')
      .where({ id: req.params.id })
      .first();
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json(console.log(error));
  }
});

router.put('/:id', async (req, res) => {
  try {
    const student = await db('students')
      .where({ id: req.params.id })
      .update(req.body);

    if (count > 0) {
      const student = await db('students')
        .where({ id: req.params.id })
        .first();

      res.status(200).json(role);
    } else res.status(200).json(student);
  } catch (error) {
    res.status(500).json(console.log(error));
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const count = await db('students')
      .where({ id: req.params.id })
      .del();

    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(cohort);
  } catch (error) {
    res.status(500).json(console.log(error));
  }
});

module.exports = router;
