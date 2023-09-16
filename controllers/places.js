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

router.delete('/:id', (request, response) => 
{
  let id = Number(request.params.id)
  if (isNaN(id)) 
  {
    response.render('error404')
  }
  else if (!placesInfoArray[id]) 
  {
    response.render('error404')
  }
  else 
  {
    placesInfoArray.splice(id, 1)
    response.redirect('/places')
  }
});

//Purpose: 
router.put('/:id', (request,response) => {
  const placesInfoArrayIndexes = Array.from({ length : placesInfoArray.length}, (value, index) => index);
  if (placesInfoArrayIndexes.includes(parseInt(request.params.id)))   
  {
    if (!request.body.pic) {
      // Default image if one is not provided
      request.body.pic = 'http://placekitten.com/400/400'
    }
    if (!request.body.city) {
      request.body.city = 'Anytown'
    }
    if (!request.body.state) {
      request.body.state = 'USA'
    }
    //push the data into your models
    placesInfoArray[request.params.id] = request.body;
    response.redirect(`/places/${request.params.id}`);  
  }
  else
  {
      //redirect to the error page 
      response.status(404).render('error404');
  }

});

router.get('/:id/edit', (request,response) =>
{
  const placesInfoArrayIndexes = Array.from({ length : placesInfoArray.length}, (value, index) => index);
  if (placesInfoArrayIndexes.includes(parseInt(request.params.id)))   
  {
      response.render(placesDir + 'editPlace', 
      {
        place : placesInfoArray[request.params.id],
        skeletonData: 
        {
            title     : `RestRant: Edit ` + placesInfoArray[request.params.id].name,
            customCSS : ''
        },
        id: request.params.id
      });
  }
  else
  {
      //redirect to the error page 
      response.status(404).render('error404');
  }
});






module.exports = router

