const express = require ('express');
const app = express();

const greetingRoute = app.get('/', (req, res) => {
    res.send('Hello World');
});


module.exports = {
    greetingRoute
};