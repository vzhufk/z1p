exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("states", table => {
      table.increments("id").primary();
      table.string("name");
      table.string("code");
      table
        .string("country")
        .references("code")
        .inTable("countries");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("states")]);
};
