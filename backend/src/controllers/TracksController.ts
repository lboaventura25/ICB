/* eslint-disable no-return-assign */
import { Response, Request } from 'express'
import connection from '@database/connection'
import { Card } from '@models/Card'

class TrackController {
  async index (request: Request, response: Response) {
    const idMonth = request.params.id

    const track = await connection('tracks')
      .where('id_month', idMonth)
      .first()

    if (!track) {
      return response.status(400).json({ message: 'Track not found' })
    }

    const cards = await connection('cards')
      .join('tracks', 'cards.id', '=', 'tracks.id_card')
      .where('tracks.id_month', idMonth)
      .select('*')

    cards.filter(card => card.id = undefined)

    return response.json({ idMonth, cards })
  }

  async create (request: Request, response: Response) {
    const month = request.body.month
    const cards = <Card[]>(request.body.cards)

    const trx = await connection.transaction()
    let count = 0

    try {
      while (cards[count]) {
        cards[count].id = (
          await trx('cards')
            .insert(cards[count++])
        )
      }

      const tracks = cards.map(card => {
        return {
          id_month: month,
          id_card: card.id[0]
        }
      })

      await trx('tracks').insert(tracks)

      await trx.commit()

      return response.json(cards)
    } catch (err) {
      return response.status(500).json({ message: "Can't create track" })
    }
  }
}

export default TrackController
