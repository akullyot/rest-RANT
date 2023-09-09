const { response } = require('express')
const { request } = require('http')

const router = require('express').Router()

//directory in the views folder for redirecting
const placesDir = "places/";

router.get('/', (request, response) => 
{
    //generate Mock Data
    let placesInfoArray = 
    [
        {
            name    : 'H-Thai-ML',
            city    : 'Seattle',
            state   : 'WA',
            cuisines: 'Thai, Pan-Asian',
            pic     : "/assets/restaurantPics/hthaiml.jpg"
       },
       {
            name    : 'Coding Cat Cafe',
            city    : 'Phoenix',
            state   : 'AZ',
            cuisines: 'Coffee, Bakery',
            pic     : "/assets/restaurantPics/codingCat.jpg"
      }]
      
    response.render(placesDir + 'index', { placesInfoArray })
});

router.get('/newPlace', (request,response) => 
{

})

router.get('/:placeName', (request,response) =>
{

});


router.get(':placeName/editPlace', (request,response) =>
{

})

module.exports = router

