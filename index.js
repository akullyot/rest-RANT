//Initalize express and include environment variables
require('dotenv').config();
const express = require('express');
const app     = express();


//Purpose: Homepage
app.get('/', (request,response) =>
{
    response.send('Hello World')
});

//Purpose: routes over to places
app.use('/places', require('./controllers/places'))

//Purpose: Catch all Page
app.get('*', (request,response) =>
{
    //chain together the sent HTML and the HTTP status
    response.status(404).send('<h1> 404 Page not Found </h1>')

})
app.listen(process.env.PORT)