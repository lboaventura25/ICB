import Knex from 'knex'

export async function seed (knex: Knex) {
  await knex('books').insert([
    { abbrev: 'gn', book_name: 'Gênesis' },
    { abbrev: 'ex', book_name: 'Êxodo' },
    { abbrev: 'lv', book_name: 'Levítico' },
    { abbrev: 'nm', book_name: 'Números' },
    { abbrev: 'dt', book_name: 'Deuteronômio' },
    { abbrev: 'js', book_name: 'Josué' },
    { abbrev: 'jz', book_name: 'Juízes' },
    { abbrev: 'rt', book_name: 'Rute' },
    { abbrev: '1sm', book_name: '1º Samuel' },
    { abbrev: '2sm', book_name: '2º Samuel' },
    { abbrev: '1rs', book_name: '1º Reis' },
    { abbrev: '2rs', book_name: '2º Reis' },
    { abbrev: '1cr', book_name: '1º Crônicas' },
    { abbrev: '2cr', book_name: '2º Crônicas' },
    { abbrev: 'ed', book_name: 'Esdras' },
    { abbrev: 'ne', book_name: 'Neemias' },
    { abbrev: 'et', book_name: 'Ester' },
    { abbrev: 'jo', book_name: 'Jó' },
    { abbrev: 'sl', book_name: 'Salmos' },
    { abbrev: 'pv', book_name: 'Provérbios' },
    { abbrev: 'ec', book_name: 'Eclesiastes' },
    { abbrev: 'ct', book_name: 'Cânticos' },
    { abbrev: 'is', book_name: 'Isaías' },
    { abbrev: 'jr', book_name: 'Jeremias' },
    { abbrev: 'lm', book_name: 'Lamentações de Jeremias' },
    { abbrev: 'ez', book_name: 'Ezequiel' },
    { abbrev: 'dn', book_name: 'Daniel' },
    { abbrev: 'os', book_name: 'Oséias' },
    { abbrev: 'jl', book_name: 'Joel' },
    { abbrev: 'am', book_name: 'Amós' },
    { abbrev: 'ob', book_name: 'Obadias' },
    { abbrev: 'jn', book_name: 'Jonas' },
    { abbrev: 'mq', book_name: 'Miquéias' },
    { abbrev: 'na', book_name: 'Naum' },
    { abbrev: 'hc', book_name: 'Habacuque' },
    { abbrev: 'sf', book_name: 'Sofonias' },
    { abbrev: 'ag', book_name: 'Ageu' },
    { abbrev: 'zc', book_name: 'Zacarias' },
    { abbrev: 'ml', book_name: 'Malaquias' },
    { abbrev: 'mt', book_name: 'Mateus' },
    { abbrev: 'mc', book_name: 'Marcos' },
    { abbrev: 'lc', book_name: 'Lucas' },
    { abbrev: 'jo', book_name: 'João' },
    { abbrev: 'at', book_name: 'Atos' },
    { abbrev: 'rm', book_name: 'Romanos' },
    { abbrev: '1co', book_name: '1ª Coríntios' },
    { abbrev: '2co', book_name: '2ª Coríntios' },
    { abbrev: 'gl', book_name: 'Gálatas' },
    { abbrev: 'ef', book_name: 'Efésios' },
    { abbrev: 'fp', book_name: 'Filipenses' },
    { abbrev: 'cl', book_name: 'Colossenses' },
    { abbrev: '1ts', book_name: '1ª Tessalonicenses' },
    { abbrev: '2ts', book_name: '2ª Tessalonicenses' },
    { abbrev: '1tm', book_name: '1ª Timóteo' },
    { abbrev: '2tm', book_name: '2ª Timóteo' },
    { abbrev: 'tt', book_name: 'Tito' },
    { abbrev: 'fm', book_name: 'Filemom' },
    { abbrev: 'hb', book_name: 'Hebreus' },
    { abbrev: 'tg', book_name: 'Tiago' },
    { abbrev: '1pe', book_name: '1ª Pedro' },
    { abbrev: '2pe', book_name: '2ª Pedro' },
    { abbrev: '1jo', book_name: '1ª João' },
    { abbrev: '2jo', book_name: '2ª João' },
    { abbrev: '3jo', book_name: '3ª João' },
    { abbrev: 'jd', book_name: 'Judas' },
    { abbrev: 'ap', book_name: 'Apocalipse' }
  ]
  )
}