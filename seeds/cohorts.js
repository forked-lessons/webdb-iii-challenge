exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('cohorts').insert([
        { name: 'web1' },
        { name: 'web2' },
        { name: 'web3' },
        { name: 'web4' },
        { name: 'web5' },
        { name: 'web6' },
        { name: 'web7' }
      ]);
    });
};
