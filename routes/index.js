const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
const contactsController = require('../controllers/contacts');  
//greetings route
routes.get('/', lesson1Controller.greetingRoute);

// all Contacts route here
routes.get('/contacts', contactsController.getAll);

// One Contact route here
routes.get('/contacts/:id', contactsController.getOne);


module.exports = routes;
