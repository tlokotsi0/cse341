const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
const contactsController = require('../controllers/contacts');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');  

// Swagger UI Route
routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

//greetings route
routes.get('/', lesson1Controller.greetingRoute);

//Contact routes here
routes.get('/contacts', contactsController.getAll);

routes.get('/contacts/:id', contactsController.getOne);

routes.post('/contacts', contactsController.createUser);

routes.put('/contacts/:id', contactsController.updateUser);

routes.delete('/contacts/:userId', contactsController.deleteUser);

module.exports = routes;
