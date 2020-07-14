exports.up = function (knex) {
  return knex.schema.table('veggies', tbl => {
    tbl.decimal('price').defaultTo(0)
  })
}

exports.down = function (knex) {
  return knex.schema.table('veggies', tbl => {
    tbl.dropColumn('price')
  })
}
