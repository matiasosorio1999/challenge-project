const express = require('express');

const app = express();

app.use(express.json());

app.use('/api/issues', () => {
  console.log("issues");
});

module.exports = app;