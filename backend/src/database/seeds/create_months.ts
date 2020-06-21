import Knex from 'knex'

export async function seed (knex: Knex) {
  await knex('months').insert([
    { month: 'Janeiro' },
    { month: 'Fevereiro' },
    { month: 'Março' },
    { month: 'Abril' },
    { month: 'Maio' },
    { month: 'Junho' },
    { month: 'Julho' },
    { month: 'Agosto' },
    { month: 'Setembro' },
    { month: 'Outubro' },
    { month: 'Novembro' },
    { month: 'Dezembro' }
  ])
};
