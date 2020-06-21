import Knex from 'knex'

export async function up (knex: Knex) {
  return knex.schema.createTable('tracks', table => {
    table.increments('id').primary()

    table.integer('id_month')
      .notNullable()
      .references('id')
      .inTable('months')

    table.integer('id_card')
      .notNullable()
      .references('id')
      .inTable('cards')
  })
}

export async function down (knex: Knex) {
  return knex.schema.dropTable('tracks')
}
