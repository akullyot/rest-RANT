//This requires React 
const React = require('react');

//Purpose: Generates the basic, HTML skeleton for each page, which can then have html.children added to render the correct page contents
//Arguments: 
//       html: and object of key:value pairs containing relevent information for each substitution
function skeletonHTML (html)
{
    return(
        <html>
            <head>
                <title> {html.title} </title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}


//Export Def to the module.exports
module.exports = skeletonHTML;