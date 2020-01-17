// Linking route to data source, the data source holds note information

const noteDBVar = require("../db/db.js");
const fs = require("fs");
const path = require("path");
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

  app.post("/api/notes", function(req, res) {
      noteDBVar.push(req.body);
      res.json(true);
      console.log(noteDBVar)
  
  }); 


//API DELETE Requests
//used the .filter method here to delete an unwanted note by it's id and create a new array.
 app.delete("/api/notes/:id", function (req,res) {
  let newArray = getDatabase();
  
  newArray = newArray.filter(note => note.id != req.params.id)
   res.json(newArray);

  function saveDatabase (newArray);

 });
};


//functions created to get/read the database, 
//and to write/save a new array to the database converting it into a string
function getDatabase () {
  return JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json")));
}

function saveDatabase (data) {
  return fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(data));
}