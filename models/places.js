//Require Mongoose
const mongoose = require('mongoose');
//Purpose: Shorthand for the Schema constructor
const {Schema} = mongoose;
//Purpose: Define our collection and create validation rules
const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic:  {type: String, default: '/assets/restaurantPics/placeholder.jpg'},
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type: Number,
    min: [1673, 'Surely not that old?!'],
    max: [new Date().getFullYear(), 'Hey, this year is in the future!']
  },
  //Because there can be multiple comments, make this plural
  comments: [{type: mongoose.Schema.Types.ObjectId, ref:'Comment'}]
});
//Purpose: Helper Method for location and founding information
placeSchema.methods.showEstablished = function()
{
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
};

//Purpose: Use said schema to create a model 
const Place = mongoose.model('Place', placeSchema);

module.exports = Place;



