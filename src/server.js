const app = require('./index');

const PORT = process.env.PORT || 3000;

// Health check endpoint (use for smoke test)
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
