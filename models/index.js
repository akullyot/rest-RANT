//Purpose: dotenv required so we can use the MONGO_URI var
require('dotenv').config;
const mongoose = require('mongoose');


//Purpose: Removes some warning messages from the terminal
mongoose.connect(process.env.MONGO_URI, 
{
  useNewUrlParser: true, 
  useUnifiedTopology: true
});


//Making a one stop shop for connection information and access to all of the models
module.exports.Place    = require('./places');
module.exports.Comment  = require('./comments');

