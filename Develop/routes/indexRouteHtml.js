// Including path package to get the correct file path for the html
const path = require("path");

// Routing

module.exports = function(app) {
  // HTML GET Requests
  //When a user visits a page, the html coordinating html content is shown.
  
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};