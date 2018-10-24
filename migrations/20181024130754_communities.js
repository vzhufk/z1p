exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("communities", table => {
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
      table
        .integer("province")
        .references("id")
        .inTable("provinces");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("communities")]);
};
