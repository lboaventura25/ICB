import Knex from 'knex'

export async function up (knex: Knex) {
  return knex.schema.createTable('cards', table => {
    table.increments('id').primary()
    table.string('book').notNullable()
    table.integer('first_chapter').notNullable()
    table.integer('last_chapter').notNullable()
    table.integer('day').notNullable()
  })
}

export async function down (knex: Knex) {
  return knex.schema.dropTable('cards')
}
