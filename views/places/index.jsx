//This requires React and the basic, skeleton HTML generator for every page
const React = require('react');
//Identification: the function skeletonHTML from skeletonHTMLDefault.jsx that has been exported to node.modules
//Purpose: Generates the basic backbone of every HTML page 
//Note: React components must be PascalCase
const GenerateSkeletonHtml = require('../skeletonHTMLDefault.jsx');

//Purpose: Generate the html.children of the homepage
function generatePlacesIndex(data)
{
    //First, make the HTML for each place 
    let placesArrayHTML = data.placesInfoArray.map((place) => 
    {
        return(
            //create the relevant HTML for each place, which can then be substituted in below
            <div id = {place.name + 'Div'}>
                <h2>{place.name}</h2>
                <img src= {place.pic} alt= {place.name + "Image"} />
            </div>
        )
    }) 
    return(
        <GenerateSkeletonHtml>
            <main>
                <h1>
                    List of all places reviewed by REST-rant:
                </h1>
                <section id = "placesGrid">
                    {placesArrayHTML}
                </section>
            </main>
        </GenerateSkeletonHtml>
    );
}

module.exports = generatePlacesIndex;