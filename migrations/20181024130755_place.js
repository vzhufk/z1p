exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("places", table => {
      table.string("name");
      table.float("longitude");
      table.float("latitude");
      table.integer("accuracy").defaultTo(6);
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
      table
        .integer("community")
        .references("id")
        .inTable("communities");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("places")]);
};
