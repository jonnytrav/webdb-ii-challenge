exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .text("make", 64)
      .unique()
      .notNullable();
    tbl.text("model", 128).notNullable();
    tbl.integer("mileage").notNullable();
    tbl.text("VIN", 32).notNullable();
    tbl.text("title", 32);
    tbl.text("transmission", 32);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
