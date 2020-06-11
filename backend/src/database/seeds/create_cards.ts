import Knex from "knex";

export async function seed(knex: Knex) {
  await knex('cards').insert([
    { 
      book: 'Mateus', 
      firstChapter: 1, 
      lastChapter: 3, 
      date: Date.now()  
    },
]);
};