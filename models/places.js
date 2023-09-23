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
//Adding in a Hook where if one item here the places will have their cmments wiped of it as well
// hooks 
/*
placeSchema.post('findOneAndDelete', function() {
  for(var i= 0 ; i < this._controller.comments.length; i++)
  {
    Comment.findByIdAndDelete(this._controller.comments[i])
    .then(deleteStatus => 
      {
        console.log(deleteStatus);
      })

  }
});
*/
//Purpose: Use said schema to create a model 
const Place = mongoose.model('Place', placeSchema);

module.exports = Place;



