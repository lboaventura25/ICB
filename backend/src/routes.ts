import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.send('Hello World, ICB');
});

export default routes;