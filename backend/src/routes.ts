import express from 'express';
import connection from './database/connection';
import CardsController from './controllers/CardsController';
import MonthsController from './controllers/MonthsController';

const routes = express.Router();

const cardsController = new CardsController();
const monthsController = new MonthsController();

routes.get('/', (request, response) => {
  return response.send('Momozinho, eu te amo!');
});

routes.get('/months', monthsController.index);
routes.get('/months/:id', monthsController.show);

routes.get('/cards/:id', cardsController.show);
routes.post('/cards', cardsController.create);

export default routes;