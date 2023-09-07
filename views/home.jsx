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
                <div id="photoCollage">
                    <div id = "row1" class = "row">
                        <div class = "item">
                            <img src = '\assets\whiteCake.jpg'></img>
                            <div class = "itemDetails">
                                Scrumptious  Cake
                            </div>
                        </div>
                        <div class = "item">
                            <img src = '\assets\whiteEggToast.jpg'></img>
                            <div class = "itemDetails">
                                perfect breakfast
                            </div>
                        </div>
                        <div class = "item">
                            <img src = '\assets\whiteFruitBowl.jpg'></img>
                            <div class = "itemDetails">
                                refreshing salsa
                            </div>
                        </div>
                        <div class = "item">
                            <img src = '\assets\whiteLatte.jpg'></img>
                            <div class = "itemDetails">
                                delicious latte
                            </div>
                        </div>
                        <div class = "item">
                            <img src = '\assets\whitePancake.jpg'></img>
                            <div class = "itemDetails">
                                whimsical pancake
                            </div>
                        </div>
                        <div class = "item">
                            <img src = '\assets\whitePearBowl.jpg'></img>
                            <div class = "itemDetails">
                                unique salad
                            </div>
                        </div>
                    </div>
                    <div id= "row2" class = "row"> 
                        <h1>Welcome to Rest-RANT, a restaurant reviewing service</h1>
                    </div>
                    <div id = "row3" class = "row">
                        <div class = "item">
                            <img src = '\assets\whitePokeBowl.jpg'></img>
                            <div class = "itemDetails">
                                colorful poke
                            </div>
                        </div>
                        <div class = "item">    
                            <img src = '\assets\whiteSalad.jpg'></img>
                            <div class = "itemDetails">
                                sublime salad
                            </div>
                        </div>
                        <div class = "item">
                            <img src = '\assets\whiteSalmon.jpg'></img>
                            <div class = "itemDetails">
                                perfect salmon
                            </div>
                        </div>
                        <div class = "item">
                            <img src = '\assets\whiteCake.jpg'></img>
                            <div class = "itemDetails">
                                scrumptious cake 
                            </div>
                        </div>
                        <div class = "item">
                            <img src = '\assets\whiteSalmonBowl.jpg'></img>
                            <div class = "itemDetails">
                                rainbow bowl
                            </div>
                        </div>
                        <div class = "item">
                            <img src = '\assets\whiteTart.jpg'></img>
                            <div class = "itemDetails">
                                refreshing tart
                            </div>
                        </div>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </GenerateSkeletonHtml>
    );
}

module.exports = generateHomeChildrenHTML;