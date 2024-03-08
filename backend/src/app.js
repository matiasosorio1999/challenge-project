const express = require('express');
const cors = require('cors');
const issuesRouter = require('./api/issues/issues.router');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/issues', issuesRouter);

module.exports = app;