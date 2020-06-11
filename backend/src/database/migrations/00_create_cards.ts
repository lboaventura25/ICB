import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('cards', table => {
    table.increments('id').primary();
    table.string('book').notNullable();
    table.integer('firstChapter').notNullable();
    table.integer('lastChapter').notNullable();
    table.date('date').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('cards');
}