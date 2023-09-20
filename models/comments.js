//Require Mongoose
const mongoose = require('mongoose');
//Purpose: Shorthand for the Schema constructor
const {Schema} = mongoose;
//Purpose: Define our collection and create validation rules
const commentSchema = new mongoose.Schema({
  //Name of the comments writer, anonymous if missing
  author       : { type: String, default: 'Anonymous' },
  //If comment is negative or postive
  isPositive   : { type: Boolean, default: false},
  //1 to 5 rating
  //TODO add a 0.5 incrementor validator
  stars        : { type: Number,     min: [1, 'Rating must be at least one star'], max: [5, 'Rating cannot be over 5 stars'] },
  //String of the comment content
  content: { type: String, default: '' }
});


//Purpose: Use said schema to create a model 
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;



