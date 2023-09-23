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
                <title> Rest-RANT {html.information.title  || 'Default'} </title>
                <link rel= "stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                <link rel = 'stylesheet' href = '/css/main.css' ></link>
                <link rel = 'stylesheet' href = '/css/topNav.css' ></link>
                <link rel = 'stylesheet' href = '/css/footer.css'></link>
                <link rel = 'stylesheet' href = {html.information.customCSS}></link>
            </head>
            <body>
                <nav id = "topNav">
                    <div id = "LHS">
                        <img src= "\assets\logo.svg"></img>
                        <span> rest-RANT</span>
                    </div>
                    <div id = "RHS">
                        <ul>
                            <li key ="home">
                                <a href = "/"> Home </a>
                            </li>
                            <li key = "browse">
                                <a href = "/places"> All Restaurants </a>
                            </li>                        
                            <li key = "add">
                                <a href = "/places/new"> Add a Restaurant </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {html.children}
                <footer>
                    <h5> Website Created By: <a href = 'https://github.com/akullyot'> Annie Ullyot</a></h5>
                </footer>
            </body>
        </html>
    )
}
//Export Def to the module.exports
module.exports = GenerateSkeletonHtml;