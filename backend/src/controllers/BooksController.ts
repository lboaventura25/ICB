import { Request, Response } from 'express'
import connection from '@database/connection'

class BooksController {
  async show (request: Request, response: Response) {
    try {
      const idBook = request.params.id

      const book = await connection('books').where('id', idBook).first()

      return response.json({ book })
    } catch (err) {
      return response.status(404).json({ message: 'Book not found' })
    }
  }

  async index (request: Request, response: Response) {
    const books = await connection('books').select('*')

    return response.json({ books })
  }
}

export default BooksController
