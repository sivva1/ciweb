const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Vercel!');
});

module.exports = app; // This is crucial for Vercel
