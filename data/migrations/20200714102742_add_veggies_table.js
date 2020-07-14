// this function describes the changes we want to make
exports.up = function (knex) {
  return knex.schema.createTable('veggies', tbl => {
    // creates a primary key that auto-increments
    tbl.increments('id') // will still be called id if 'id' not entered
    // add a string (varchar) column up to 128 characters long
    // should not allow duplicate values (unique) - and always required (not null)
    tbl.string('name').unique().notNullable()
  })
}
// this functions describes how to undo the changes
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('veggies')
}
