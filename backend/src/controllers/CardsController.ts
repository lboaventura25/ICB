import { Request, Response } from "express";
import connection from "../database/connection";

class CardsController {
  async show(request: Request, response: Response) {
    const id = request.params.id;

    const card = await connection('cards').where('id', id).first();

    card.date = new Date(card.date).toISOString();

    return response.json({ card });
  }

  async store(request: Request, response: Response) {
    const card = request.body;

    const id = await connection('cards').insert(card);

    return response.send(id);
  }
}

export default CardsController;