//Require Mongoose
const mongoose = require('mongoose');
//Purpose: Shorthand for the Schema constructor
const {Schema} = mongoose;
//Purpose: Define our collection and create validation rules
const placeSchema = new Schema(
  {
      name    : { type: String, required: true },
      pic     : { type: String, default: 'http://placehold.it/500x500.png'},
      cuisines: { type: String, required: true },
      city    : { type: String, default: 'Anytown' },
      state   : { type: String, default: 'USA' },
      founded : { type: Number}
  }
);
//Purpose: Use said schema to creat a model 
const Place = mongoose.model('Place', placeSchema);


//Export to make available for importing elsewhere
module.exports = Place;