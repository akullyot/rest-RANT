//Requirements
const { response } = require('express');
const { request }  = require('http');
const router       = require('express').Router();
//Load in data from the models
const database = require('../models');

//directory in the views folder for redirecting, written here for DRY reasons
const placesDir = "places/";

//STATIC ROUTES
//Purpose: List out every restaruant in database
router.get('/', (request, response) => 
{
  database.Place.find()
  .then(foundPlaces => 
    {
      //todo: cool idea would be to implement sorting by how nearby a restauraunt is to the user 
      response.render(placesDir + 'index', 
      { 
        foundPlaces,
        skeletonData: {
                        title     : 'Rest-RANT:Places',
                        customCSS : ''
                      }
      });
    });
});
//Purpose: Add a new place
router.post('/', (request,response) =>
{
  //NOTE: the defaults arent working unless you make it undefined
  if (request.body.pic == "")
  {
     request.body.pic = undefined;
  }
  if (request.body.city == "")
  {
     request.body.city = undefined;
  }
  if (request.body.state == "")
  {
     request.body.state = undefined;
  }

   database.Place.create(request.body).then((createdPlace) => 
    {
      response.redirect('/places');  
    }).catch (err => {
      console.log('error:' + err);
      response.render('error404' ,{ skeletonData: 
                                    {
                                      title     : 'Rest-RANT:Places',
                                      customCSS : ''
                                    }
      });
    });
});

//Purpose: Form for inputting a new restaruant 
router.get('/new', (request,response) => 
{
    response.render(placesDir + 'newPlace',
    {
      skeletonData: 
      {
          title     : `RestRant: New Restauraunt`,
          customCSS : ''
      }
    }
    )
});
//Purpose: Create many new places 
router.get('/data/seed', async function (request, response)
{
  try 
  {
    const newPlacesBulkDataArray = require('../seed/placeBulkData.js');
    await  database.Place.insertMany(newPlacesBulkDataArray);
    //Including in here comment seeding because it wasnt working in the seperate section
    // Get the place, H-Thai-ML
    let place = await database.Place.findOne({ name: 'H-Thai-ML' });
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
    response.redirect('/places');
  } 
  catch (err) 
  {
    console.log('Failure in adding mock data :' + err);
    response.status(404).send('<h1> 404 Page not Found </h1>');
  }
}
);





//DYNAMIC ROUTES


//Purpose: Show a places Information
router.get('/:id', (request,response) =>
{

  database.Place.findById(request.params.id)
  .populate('comments')
  .then(foundPlace =>
    {
      console.log(foundPlace.comments);
      response.render(placesDir + 'showPlace',
      {
          place       : foundPlace,
          skeletonData: 
                        {
                            title     : `RestRant: ` + foundPlace.name,
                            customCSS : ''
                        },
      });
    })
    .catch(err => 
    {
      //redirect to the error page 
      response.status(404).render('error404');
    })
});
//Purpose: delete a place from the database
router.delete('/:id', (request, response) => 
{
  database.Place.findByIdAndDelete(request.params.id)
  .then(deletePlace => 
  {
      response.status(303).redirect('/places');
  })
  .catch(err => 
    {
      response.send('<h1> There was an  error when attempting editing this entry. please try again. </h1>');
    }); 
});

//Purpose: Update a places databse information
router.put('/:id', (request,response) => {
    database.Place.findByIdAndUpdate(request.params.id, request.body, { new: true }) 
    .then(updatedPlace => {
      response.redirect(`/places/${request.params.id}`) 
    }).catch (err => {
    console.log('error:' + err);
    response.render('error404' ,{ skeletonData: 
                                  {
                                    title     : 'Rest-RANT:Places',
                                    customCSS : ''
                                  }
    });
  });
});
//Purpose: Display an edit Place Form
router.get('/:id/edit', (request,response) =>
{
  database.Place.findById(request.params.id)
  .then(foundPlace => 
  {
      response.render(placesDir + 'editPlace', 
      {
          place        : foundPlace,
          skeletonData : 
                        {
                          title      : 'Edit: ' + foundPlace.name,
                          pageCSS    : ''
                        }
      });
  })
  .catch(err => {
    response.status(404).send('<h1> 404 Page not Found </h1>');
  })
});






module.exports = router;

