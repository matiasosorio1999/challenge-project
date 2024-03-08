
class IssuesService {
  constructor() {
    this.issues = [{ id: 1, title: "First Issue", description: "The description of the issue"},
                  {id: 2, title: "Second Issue", description: "Another description for an issue"}];
    this.nextId = 3;
  }

  createIssue(issue) {
    const newIssue = { id: this.nextId++, ...issue };
    this.issues.push(newIssue);
    return newIssue;
  }

  getIssues() {
    return this.issues;
  }

  getIssueById(id) {
    return this.issues.find(issue => issue.id === id);
  }

  updateIssue(id, issue) {
    const index = this.issues.findIndex(issue => issue.id === id);
    if (index === -1) return null;
    this.issues[index] = { ...this.issues[index], ...issue };
    return this.issues[index];
  }

  deleteIssue(id) {
    const index = this.issues.findIndex(issue => issue.id === id);
    if (index === -1) return null;
    return this.issues.splice(index, 1)[0];
  }
}

module.exports = IssuesService;
