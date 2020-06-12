import { Response, Request } from "express";
import connection from "../database/connection";

class MonthsController {
  async index(request: Request, response: Response) {
    const months = await connection('months').select('month');

    return response.json(months);
  }

  async show(request: Request, response: Response) {
    const id = request.params.id;

    const month = await connection('months')
      .where('id', id)
      .select('month')
      .first();

    return response.json(month);
  }
}

export default MonthsController;