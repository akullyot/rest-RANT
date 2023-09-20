const database = require('../models');

//Purpose: Find the database of interest, find the restaurant, then add a comment
async function seed() 
{
    // Get the place, H-Thai-ML
    let place = await database.Place.findOne({ name: 'H-Thai-ML' });
    console.log('here');
    //Create a comment
    let comment = await database.Comment.create({
        author    : 'Famished Fran',
        isPositive: true,
        stars     : 5.0,
        content   : 'Wow, simply amazing! Highly recommended!'
    });

    // Add that comment to the place's comment array.
    place.comments.push(comment.id);

    //save the place now that it has comment
    await place.save();
    
    //Give yourself a console comment
    console.log(`You have successfully seeded a new comment`);
    // Exit the program
    process.exit();
}

seed();


