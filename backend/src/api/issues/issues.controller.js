
class IssuesController {
  constructor(issuesService) {
    this.issuesService = issuesService;
  }

  createIssue(req, res) {
    const issue = this.issuesService.createIssue(req.body);
    res.status(201).json(issue);
  }

  getAllIssues(req, res) {
    res.json(this.issuesService.getIssues());
  }

  getIssue(req, res) {
    const issue = this.issuesService.getIssueById(parseInt(req.params.id));
    if (!issue) return res.status(404).send('Issue not found');
    res.json(issue);
  }

  updateIssue(req, res) {
    const updatedIssue = this.issuesService.updateIssue(parseInt(req.params.id), req.body);
    if (!updatedIssue) return res.status(404).send('Issue not found');
    res.json(updatedIssue);
  }

  deleteIssue(req, res) {
    const issue = this.issuesService.deleteIssue(parseInt(req.params.id));
    if (!issue) return res.status(404).send('Issue not found');
    res.json(issue);
  }
}

module.exports = IssuesController;
