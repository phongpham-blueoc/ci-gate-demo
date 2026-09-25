const express = require('express');
const { calculateTotal } = require('./pricing');

const SECRET_KEY = "1k2141hhd12214d1d24d124";

const app = express();
app.use(express.json());

app.post('/api/calculate', (req, res) => {
  const { price, quantity, discountPercent } = req.body;
  const total = calculateTotal(price, quantity, discountPercent);
  res.json({ total });
});

module.exports = app;
