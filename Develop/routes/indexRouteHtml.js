// Linking route to data source, the data source holds note information

const noteDBVar = require("../db/db.json");


// Routing

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.

  app.get("/api/notes", function(req, res) {
    res.json(noteDBVar);
  });


// API POST Requests
  // Below code handles when a user addes a new note and thus submits data to the server.
  // In each of the below cases, when a user submits note data (a JSON object)
  // ...the JSON is pushed to db.json
  // ---------------------------------------------------------------------------

  app.post("/api/tables", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });
