//This requires React and the basic, skeleton HTML generator for every page
const React = require('react');
//Identification: the function skeletonHTML from skeletonHTMLDefault.jsx that has been exported to node.modules
//Purpose: Generates the basic backbone of every HTML page 
//Note: React components must be PascalCase
const GenerateSkeletonHtml = require('./skeletonHTMLDefault.jsx');

//Purpose: Generate the html.children of the homepage
function generateHomeChildrenHTML()
{
    return(
        <GenerateSkeletonHtml>
            <main>
                <h1>
                    Welcome to Rest-RANT, a restaurant reviewing service
                </h1>
            </main>
        </GenerateSkeletonHtml>
    );
}

module.exports = generateHomeChildrenHTML;