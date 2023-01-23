const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello world!');
});

app.listen(3000, () => console.log('Server started at http://localhost:3000'));

// ./node_modules/.bin/nodemon src/index.js
