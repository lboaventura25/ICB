import Knex from 'knex'

export async function up (knex: Knex) {
  return knex.schema.createTable('books', table => {
    table.increments('id').primary()
    table.string('book_name').notNullable()
    table.string('abbrev', 3).notNullable()
  })
}

export async function down (knex: Knex) {
  return knex.schema.dropTable('books')
}
