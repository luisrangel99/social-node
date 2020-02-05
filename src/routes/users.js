const express = require('express');
const mongoose = require('mongoose');

const app = express.Router();

app.get( '/', ( req, res ) => {
    res.render('login');
});

app.get( '/singup', (  req, res ) => {
    res.render('singup');
});

app.post( '/users/login', ( req, res) => {
    console.log(req.body);
    res.send('ok'); 
});

module.exports = app;