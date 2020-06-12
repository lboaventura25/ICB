import express from 'express';
import CardsController from './controllers/CardsController';
import MonthsController from './controllers/MonthsController';
import TrackController from './controllers/TrackController';

const routes = express.Router();

const cardsController = new CardsController();
const monthsController = new MonthsController();
const trackController = new TrackController();

routes.get('/', (request, response) => {
  return response.send('Ben-vindo ao backend!');
});

routes.get('/months', monthsController.index);
routes.get('/month/:id', monthsController.show);

routes.get('/card/:id', cardsController.show);
routes.post('/card/new', cardsController.create);

routes.post('/track/new', trackController.create);
routes.get('/track/:id_month', trackController.index);

export default routes;