const express = require('express');
const { calculateTotal } = require('./pricing');

const app = express();
app.use(express.json());

app.post('/api/calculate', (req, res) => {
  const { price, quantity, discountPercent } = req.body;
  const total = calculateTotal(price, quantity, discountPercent);
  res.json({ total });
});

// BAD: eval() — Remote Code Execution vulnerability
app.post('/api/eval', (req, res) => {
  const result = eval(req.body.code);   // SonarCloud: BLOCKER (Security)
  res.json({ result });
});

// BAD: empty catch block — swallows errors silently
app.get('/api/status', (req, res) => {
  try {
    const data = JSON.parse(req.query.input);
    res.json(data);
  } catch (e) {
    // SonarCloud: Code Smell (empty catch block)
  }
});

// BAD: Math.random() used for security token — weak randomness
app.get('/api/token', (req, res) => {
  const token = Math.random().toString(36);  // SonarCloud: Security Hotspot
  res.json({ token });
});

module.exports = app;
