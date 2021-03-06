// Linking route to data source, the data source holds note information
// const noteDBVar = require("../db/db.js");
const fs = require("fs");
const path = require("path");

// Routing

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.

  app.get("/api/notes", function(req, res) {
    res.json(getDatabase());
    console.log(getDatabase());
  });


// API POST Requests
  // Below code handles when a user adds a new note and thereby submits data to the server.
  // When a user submits note data (a JSON object)...the JSON is pushed to db.json

  app.post("/api/notes", function(req, res) {
      //reading the file
      const database = getDatabase();
      //modifying the file
      req.body.id = Math.floor(Math.random()*1000);
      database.push(req.body);
      //saving new file
      saveDatabase (database);
      res.send("Successfully updated");
  }); 


//API DELETE Requests
//used the .filter method here to delete an unwanted note by it's ID and create a new array.
 app.delete("/api/notes/:id", function (req,res) {
  let newArray = getDatabase();
  
  newArray = newArray.filter(note => note.id != req.params.id)
   res.json(newArray);

  saveDatabase (newArray);
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