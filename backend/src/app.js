const express = require('express');
const issuesRouter = require('./api/issues/issues.router');

const app = express();

app.use(express.json());

app.use('/api/issues', issuesRouter);

module.exports = app;