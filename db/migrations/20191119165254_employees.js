
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', function (table) {
    table.increments('id');
    table.string('name');
    table.string('email');
    table.string('position');
    table.string('phone');
    table.integer('salary');
    table.date('date_hired')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employees');
};
