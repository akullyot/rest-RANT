//This requires React and the basic, skeleton HTML generator for every page
const React = require('react');
//Identification: the function skeletonHTML from skeletonHTMLDefault.jsx that has been exported to node.modules
//Purpose: Generates the basic backbone of every HTML page 
//Note: React components must be PascalCase
const GenerateSkeletonHtml = require('../skeletonHTMLDefault.jsx');

function generateShowPage (place) {
    return (
        <GenerateSkeletonHtml>
          <main>
            <h1 className='noAnimation'>Show Page</h1>
            
          </main>
        </GenerateSkeletonHtml>
    )
}

module.exports = generateShowPage
