const express = require('express');
const path = require('path');

const categories = require('./data/categories.json');
const products = require('./data/products.json');

const buildPath = path.resolve(__dirname, '../build');

const app = express();

app.use(express.json());

app.post('/api/order', (request, response) => {
  response.send(request.body);
});

app.get('/api/products', (request, response) => {
  response.json(products);
});

app.get('/api/categories', (request, response) => {
  response.json(categories);
});

app.get('*', (request, response) => {
  console.log(request, response);
  response.sendFile(path.resolve(buildPath, 'index.html'));
});

module.exports = app;