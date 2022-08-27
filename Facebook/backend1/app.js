require('./config/config')
require('./models/db');
require('./config/passportConfig');

const mongoose = require('mongoose');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const routeIndex = require('./routes/index.router');
const testIndex = require('./routes/test.js');


var app = express();
const server = require('http').createServer(app);


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(cors());
app.use('/public', express.static('public'))
app.use(passport.initialize());
app.use('/api', routeIndex);
app.use("", testIndex);


//error handler
app.use((err, req, res, next) => {
    if(err.name == 'ValidationError'){
        var valErrors = [];
        Object.keys(err.errors).forEach( key => valErrors.push(err.errors[key].message) );
        res.status(422).send(valErrors)
    }
});

console.log("kichu ekta ");



//start server
server.listen(5100, () => console.log(`Server started at port: 5000`));

