exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("zips", table => {
      table.increments("id").primary();
      table.string("country_code");
      table.string("zip_code");
      table.string("place");
      table.string("state");
      table.string("state_code");
      table.string("province");
      table.string("province_code");
      table.string("community");
      table.string("community_code");
      table.integer("latitude");
      table.integer("longitude");
      table.integer("accuracy").defaultTo(6);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("zips")]);
};
