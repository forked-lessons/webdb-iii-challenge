const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const cohortsRouter = require('./cohortsRoute');
const studentsRouter = require('./studentsRoute');
const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', async (req, res) => {
  try {
    res.status(200).json('Hello World');
  } catch {}
});

const port = process.env.PORT || 5000;
server.use('/api/cohorts', cohortsRouter);
server.use('/api/students', studentsRouter);

server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
