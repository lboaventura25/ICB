import express from 'express'
import CardsController from './controllers/CardsController'
import MonthsController from './controllers/MonthsController'
import TracksController from './controllers/TracksController'
import BooksController from './controllers/BooksController'

const routes = express.Router()

const cardsController = new CardsController()
const monthsController = new MonthsController()
const tracksController = new TracksController()
const booksController = new BooksController()

routes.get('/', (request, response) => {
  return response.send('Ben-vindo ao backend!')
})

routes.get('/books', booksController.index)
routes.get('/book/:id', booksController.show)

routes.get('/months', monthsController.index)
routes.get('/month/:id', monthsController.show)

routes.get('/card/:id', cardsController.show)
routes.post('/card/new', cardsController.create)

routes.post('/track/new', tracksController.create)
routes.get('/track/:id', tracksController.index)

export default routes
