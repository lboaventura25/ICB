import { Request, Response } from 'express'
import connection from '@database/connection'

class CardsController {
  async show (request: Request, response: Response) {
    const idCard = request.params.id

    const card = await connection('cards').where('id', idCard).first()

    return response.json({ card })
  }

  async create (request: Request, response: Response) {
    return null
  }
}

export default CardsController
