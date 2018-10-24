exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("provinces", table => {
      table.increments("id").primary();
      table.string("name");
      table.string("code");
      table
        .integer("state")
        .references("id")
        .inTable("states");
      table
        .string("country")
        .references("code")
        .inTable("countries");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("provinces")]);
};
