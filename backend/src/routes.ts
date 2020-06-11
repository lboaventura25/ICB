import express from 'express';
import connection from './database/connection';
import CardsController from './controllers/CardsController';

const routes = express.Router();

const cardsController = new CardsController();

routes.get('/cards/:id', cardsController.show);
routes.post('/cards', cardsController.store);

export default routes;