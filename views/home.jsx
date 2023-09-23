//This requires React and the basic, skeleton HTML generator for every page
const React = require('react');
//Identification: the function skeletonHTML from skeletonHTMLDefault.jsx that has been exported to node.modules
//Purpose: Generates the basic backbone of every HTML page 
//Note: React components must be PascalCase
const GenerateSkeletonHtml = require('./skeletonHTMLDefault.jsx');

//Purpose: Generate the html.children of the homepage
function generateHomeChildrenHTML(data)
{   
    let pictureDirectory = "/assets/homePage/";
    //Purpose: holds image name and image descriptions for the entry photocollage
    const photoCollageInformation = { row1 : [['scrumptious cake', 'whiteCake.jpg', 'Lorem Ipsum Cafe  Anytown, USA'  ],
                                              ['perfect  breakfast','whiteEggToast.jpg', 'Lorem Ipsum Cafe  Anytown, USA' ],
                                              ['refreshing salsa', 'whiteFruitBowl.jpg', 'Lorem Ipsum Cafe  Anytown, USA' ],
                                              ['unique salad', 'whitePearBowl.jpg', 'Lorem Ipsum Cafe  Anytown, USA' ],
                                             ],
                                      row3 : [['sublime salad','whiteSalad.jpg', 'Lorem Ipsum Cafe  Anytown, USA' ],
                                             ['perfect salmon','whiteSalmon.jpg', 'Lorem Ipsum Cafe  Anytown, USA' ],
                                             ['rainbow bowl', 'whiteSalmonBowl.jpg', 'Lorem Ipsum Cafe  Anytown, USA' ],
                                             ['refreshing tart', 'whiteTart.jpg', 'Lorem Ipsum Cafe  Anytown, USA' ],
                                            ]
                                    }
    function generatePhotoCollage (rowName)
    {
        let photocollageRow = photoCollageInformation[rowName].map((information) => 
        {
            return(
                <div className='flip-container'>
                    <div className="flipper  polaroid">
                        <div className="tape-section"></div>
                        <div className='front'>
                            <img src = {pictureDirectory + information[1]}></img>
                            <div className = "itemDetails">
                                {information[0]}
                            </div>
                        </div>
                        <div className='back'>
                                <h2> Location: </h2>
                                <h3> {information[2]} </h3>
                        </div>
                        <div className="tape-section"></div>
                    </div>
                </div>
            )
        })
        return photocollageRow
    }


    return(
        <GenerateSkeletonHtml information = {data}>
            <main>
                <section id="photoCollage">
                    <div id = "row1" className = "homeRow">
                        {generatePhotoCollage('row1')}
                    </div>
                    <div id= "row2" className = "homeRow"> 
                        <h1>Welcome to Rest-RANT, a restaurant reviewing service</h1>
                    </div>
                    <div id = "row3" className = "homeRow">
                        {generatePhotoCollage('row3')}
                    </div>
                </section>
                <br/>
                <br/>
                <br/>
                <section id = "websiteGoal">
                    <h2> Here at Rest-RANT, we provide users a method to explore and review restaurants. </h2>
                    <h3> Simply Select From the Navbar above to browse restaurants, or add a new restaurant for which others can rant or rave about their experiences.</h3>
                </section>
                <br/>
                <section id = "cuisineTypes">
                </section>
                <section>
                </section>
            </main>
        </GenerateSkeletonHtml>
    );
}

module.exports = generateHomeChildrenHTML;