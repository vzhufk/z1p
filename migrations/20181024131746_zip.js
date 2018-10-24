exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("zips", table => {
      table.string("code");
      table
        .integer("place")
        .references("id")
        .inTable("places");
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
  return Promise.all([knex.schema.dropTable("zips")]);
};
