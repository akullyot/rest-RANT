//Requirements
const { response } = require('express');
const { request }  = require('http');
const router       = require('express').Router();
//Load in data from the models
const Places = require('../models/places.js');

//directory in the views folder for redirecting, written here for DRY reasons
const placesDir = "places/";

//STATIC ROUTES
//Purpose: List out every restaruant in database
router.get('/', (request, response) => 
{
  Places.find()
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
    //1. Modify data accordingly to match db validations
        if (!request.body.pic) 
        {
          //Note: the database validation adds a placeholder picture
          request.body.pic = undefined;
        }
        if (!request.body.city) 
        {
          request.body.city = 'Anytown';
        }
        if (!request.body.state) 
        {
          request.body.state = 'USA';
        }
        //push the data into your models
        Places.create(request.body);
        response.redirect('/places');  
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
router.get('/data/seed', (request, response) =>
{
    const newPlacesBulkDataArray = require('../seed/placeBulkData.js');
    Places.insertMany(newPlacesBulkDataArray)
    .then(createdPlaces => {
        console.log('Success in adding mock data');
        response.redirect('/places');
    })
    .catch(err => {
      console.log('Failure in adding mock data :' + err);
      response.status(404).send('<h1> 404 Page not Found </h1>');
    })
}
)



//DYNAMIC ROUTES


//Purpose: Show a places Information
router.get('/:id', (request,response) =>
{

  Places.findById(request.params.id)
  .then(foundPlace =>
    {
      response.render(placesDir + 'showPlace',
      {
          place       : foundPlace,
          skeletonData: 
                        {
                            title     : `RestRant: ` + foundPlace.name,
                            customCSS : ''
                        },
          id          : foundPlace.id
      });
    })
    .catch(err => {
      //redirect to the error page 
      response.status(404).render('error404');
    })
});
//Purpose: delete a place from the database
router.delete('/:id', (request, response) => 
{
  Places.findByIdAndDelete(request.params.id)
  .then(deletePlace => 
  {
      response.status(303).redirect('/places');
  })
});

//Purpose: Update a places databse information
router.put('/:id', (request,response) => {
  const placesInfoArrayIndexes = Array.from({ length : placesInfoArray.length}, (value, index) => index);
  if (placesInfoArrayIndexes.includes(parseInt(request.params.id)))   
  {
    if (!request.body.pic) {
      // Default image if one is not provided
      request.body.pic = 'http://placehold.it/500x500.png'
    }
    if (!request.body.city) {
      request.body.city = 'Anytown'
    }
    if (!request.body.state) {
      request.body.state = 'USA'
    }
    Places.findByIdAndUpdate(request.params.id, request.body, { new: true }) 
    .then(updatedPlace => {
      response.redirect(`/places/${request.params.id}`) 
    })
    .catch(err => {
      response.send('<h1> There was an  error when attempting editing this entry. please try again. </h1>');
    }); 
  }
  else
  {
      //redirect to the error page 
      response.status(404).render('error404');
  }
});
//Purpose: Display an edit Place Form
router.get('/:id/edit', (request,response) =>
{
  Places.findById(request.params.id)
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






module.exports = router

