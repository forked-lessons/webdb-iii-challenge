exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('students').insert([
        { name: 'Dan', cohort_id: 4 },
        { name: 'Daniel', cohort_id: 3 },
        { name: 'Danny', cohort_id: 5 }
      ]);
    });
};
