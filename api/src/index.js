const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
require('express-async-error');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes); // Middleware 2
app.use((error, request, response, next) => {
  console.log('Error handler');
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('Server started at http://localhost:3000'));

// ./node_modules/.bin/nodemon src/index.js
