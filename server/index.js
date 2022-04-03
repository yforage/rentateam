const express = require('express');
const path = require('path');
const categories = require('./data/categories.json');
const products = require('./data/products.json');

const PORT = process.env.PORT || 3001;

const buildPath = path.resolve(__dirname, '../build');

const app = express();

app.use(express.static(buildPath));

app.post('/order', (request, response) => {
});

app.get('/products', (request, response) => {
  response.json(products);
});

app.get('/categories', (request, response) => {
  response.json(categories);
});

app.get('*', (request, response) => {
  response.sendFile(path.resolve(buildPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0');
