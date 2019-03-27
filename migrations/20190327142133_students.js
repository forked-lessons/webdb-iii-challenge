exports.up = function(knex) {
  return knex.schema.createTable('students', function(tbl) {
    tbl.increments();
    tbl.string('name', 128).notNull();
    tbl.integer('cohort_id').notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('students');
};
