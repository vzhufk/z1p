exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("countries", table => {
      table.string("code").primary();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("countries")]);
};
