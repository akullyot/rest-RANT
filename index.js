//SECTION - Initializations
//Initalize the express framework and include environment variables
require('dotenv').config();
const methodOverride = require('method-override');
const express        = require('express');
const app            = express();

//Intialize jsx and react-express-views as the view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//Initialize a public folder
app.use(express.static('public'));

//Initialize a body parser
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


//SECTION - Routes
//STATIC ROUTES
//Purpose: Homepage
app.get('/', (request,response) =>
{
    //pass the name of the .jsx file you wish to work with
    response.render('home',
    {
        title     : 'Rest-RANT:Home',
        customCSS : '' 
    });
});

//DYNAMIC ROUTES
//Purpose: routes over to places
app.use('/places', require('./controllers/places'))

//CATCHALL ROUTE
//Purpose: Catch all Page for 404 errrors
app.get('*', (request,response) =>
{
    //chain together the sent HTML and the HTTP status
    response.status(404).render('error404');
})


//SECTION Listen
//Start website
app.listen(process.env.PORT, console.log(`listening on ${process.env.PORT}`))