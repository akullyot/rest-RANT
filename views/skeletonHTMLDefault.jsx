//This requires React 
const React = require('react');

//Purpose: Generates the basic, HTML skeleton for each page, which can then have html.children added to render the correct page contents
//Arguments: 
//       html: and object of key:value pairs containing relevent information for each substitution
//Note: react components REQUIRE PascalCasing
function GenerateSkeletonHtml (html)
{
    return(
        <html>
            <head>
                <title> {html.title} </title>
            </head>
            <body>
                <nav id = "TopNav">
                    
                </nav>
                {html.children}
            </body>
        </html>
    )
}
//Export Def to the module.exports
module.exports = GenerateSkeletonHtml;