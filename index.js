//SECTION - Initializations
//Initalize the express framework and include environment variables
require('dotenv').config();
const express = require('express');
const app     = express();

//Intialize jsx and react-express-views as the view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


//SECTION - Routes
//Purpose: Homepage
app.get('/', (request,response) =>
{
    //pass the name of the .jsx file you wish to work with
    response.render('home')
});

//Purpose: routes over to places
app.use('/places', require('./controllers/places'))

//Purpose: Catch all Page
app.get('*', (request,response) =>
{
    //chain together the sent HTML and the HTTP status
    response.status(404).render('error404');

})
app.listen(process.env.PORT)