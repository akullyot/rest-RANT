const { response } = require('express')
const { request }  = require('http')

const router          = require('express').Router();
//Purpose: holds mock data that will later be placed in a db
const placesInfoArray = require('../models/places.js');

//directory in the views folder for redirecting
const placesDir = "places/";

//STATIC ROUTES
router.get('/', (request, response) => 
{

      
    response.render(placesDir + 'index', { placesInfoArray })
});
router.post('/', (request,response) =>
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
        placesInfoArray.push(request.body);
        response.redirect('/places');  
});


router.get('/new', (request,response) => 
{
    response.render(placesDir + 'newPlace')
});



//DYNAMIC ROUTES
router.get('/:placeName', (request,response) =>
{

});


router.get(':placeName/editPlace', (request,response) =>
{

})

module.exports = router

