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
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                <link rel = 'stylesheet' href = '/css/main.css' ></link>
            </head>
            <body>
                <nav id = "topNav">

                </nav>
                {html.children}
            </body>
        </html>
    )
}
//Export Def to the module.exports
module.exports = GenerateSkeletonHtml;