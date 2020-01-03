const express = require('express');
const path = require('path');
const exphbs = require("express-handlebars");
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Initial
const app = express();

app.set( 'port', process.env.PORT || 3000 );
app.set("views", path.join(__dirname + "/views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    extname: ".hbs"
  })
);
app.set("view engine", ".hbs");

// Middlewares
app.use(express.static(path.join(__dirname, "/public")));


//Routes
app.use(require('./routes/users.js'));

mongoose
  .connect("mongodb://localhost:27017:upq", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(db => console.log("Database ONLINE"))
  .catch(err => {
    throw new err();
  });


app.listen( app.get( 'port' ), err => {
    if ( err ) console.log(err);
    console.log( `The port ${ app.get('port') } has been set` );
});