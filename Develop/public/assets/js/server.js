// Requiring express dependency to give the server functionality

const express = require("express");


// EXPRESS CONFIGURATION
// Setting up basic properties for Express server.

// Tells node to create an Express server
const app = express();

// Sets an initial port, used later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ROUTER
// Directing the server to the route files. 
//The routes give the server a map of how to res when users req data.

require(".../routes/indexRouteHtml.js")(app);
require(".../routes/noteRouteHtml.js")(app);


// LISTENER
// Starting our server.

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});