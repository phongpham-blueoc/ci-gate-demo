const express = require('express');
const { calculateTotal } = require('./pricing');

const app = express();
app.use(express.json());

app.post('/api/calculate', (req, res) => {
  const { price, quantity, discountPercent } = req.body;
  const total = calculateTotal(price, quantity, discountPercent);
  res.json({ total });
});

module.exports = app;
