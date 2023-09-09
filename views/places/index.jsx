//This requires React and the basic, skeleton HTML generator for every page
const React = require('react');
//Identification: the function skeletonHTML from skeletonHTMLDefault.jsx that has been exported to node.modules
//Purpose: Generates the basic backbone of every HTML page 
//Note: React components must be PascalCase
const GenerateSkeletonHtml = require('../skeletonHTMLDefault.jsx');

//Purpose: Generate the html.children of the homepage
//Arguments: data => all the place information
//           title =>  
function generatePlacesIndex(data, title)
{
    //First, make the HTML for each place 
    let placesArrayHTML = data.placesInfoArray.map((place) => 
    {
        return(
            //create the relevant HTML for each place, which can then be substituted in below
            <div className='col-sm-6 indexGrid' id = {place.name + 'Div'}>
                <h2>{place.name}</h2>
                <p className='text-center'> {place.cusines}</p>
                <img class = "indexPic" src= {place.pic} alt= {place.name + "Image"} />
                <p className='text-center'> Located in {place.city}, {place.state}</p>
            </div>
        )
    }) 
    return(
        <GenerateSkeletonHtml>
            <main>
                <h1 class= "noAnimation">
                    Index of all potential places to rant or rave about
                </h1>
                <section id = "placesGrid">
                    <div className='row'>
                        {placesArrayHTML}
                    </div>
                </section>
            </main>
        </GenerateSkeletonHtml>
    );
}

module.exports = generatePlacesIndex;