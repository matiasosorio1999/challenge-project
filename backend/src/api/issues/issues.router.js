
const express = require('express');
const IssuesController = require('./issues.controller');
const IssuesService = require('./issues.service');

const router = express.Router();
const issuesService = new IssuesService();
const issuesController = new IssuesController(issuesService);

router.get('/', issuesController.getAllIssues.bind(issuesController));
router.post('/', issuesController.createIssue.bind(issuesController));
router.get('/:id', issuesController.getIssue.bind(issuesController));
router.put('/:id', issuesController.updateIssue.bind(issuesController));
router.delete('/:id', issuesController.deleteIssue.bind(issuesController));

module.exports = router;
