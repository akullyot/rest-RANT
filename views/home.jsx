//This requires React and the basic, skeleton HTML generator for every page
const React = require('react');
//Identification: the function skeletonHTML from skeletonHTMLDefault.jsx that has been exported to node.modules
//Purpose: Generates the basic backbone of every HTML page 
//Note: React components must be PascalCase
const GenerateSkeletonHtml = require('./skeletonHTMLDefault.jsx');

//Purpose: Generate the html.children of the homepage
function generateHomeChildrenHTML()
{
    let pictureDirectory = "/assets/homePage/";
    return(
        <GenerateSkeletonHtml>
            <main>
                <div id="photoCollage">
                    <div id = "row1" className = "homeRow">
                        <div class = "item">
                            <img src ={pictureDirectory +'whiteCake.jpg'}></img>
                            <div class = "itemDetails">
                                Scrumptious  Cake
                            </div>
                        </div>
                        <div class = "item">
                            <img src = {pictureDirectory +'whiteEggToast.jpg'}></img>
                            <div class = "itemDetails">
                                perfect breakfast
                            </div>
                        </div>
                        <div class = "item">
                            <img src = {pictureDirectory +'whiteFruitBowl.jpg'}></img>
                            <div class = "itemDetails">
                                refreshing salsa
                            </div>
                        </div>
                        <div class = "item">
                            <img src = {pictureDirectory +'whiteLatte.jpg'}></img>
                            <div class = "itemDetails">
                                delicious latte
                            </div>
                        </div>
                        <div class = "item">
                            <img src = {pictureDirectory +'whitePancake.jpg'}></img>
                            <div class = "itemDetails">
                                whimsical pancake
                            </div>
                        </div>
                        <div class = "item">
                            <img src = {pictureDirectory +'whitePearBowl.jpg'}></img>
                            <div class = "itemDetails">
                                unique salad
                            </div>
                        </div>
                    </div>
                    <div id= "row2" className = "homeRow"> 
                        <h1>Welcome to Rest-RANT, a restaurant reviewing service</h1>
                    </div>
                    <div id = "row3" className = "homeRow">
                        <div class = "item">
                            <img src = {pictureDirectory +'whitePokeBowl.jpg'}></img>
                            <div class = "itemDetails">
                                colorful poke
                            </div>
                        </div>
                        <div class = "item">    
                            <img src = {pictureDirectory +'whiteSalad.jpg'}></img>
                            <div class = "itemDetails">
                                sublime salad
                            </div>
                        </div>
                        <div class = "item">
                            <img src = {pictureDirectory +'whiteSalmon.jpg'}></img>
                            <div class = "itemDetails">
                                perfect salmon
                            </div>
                        </div>
                        <div class = "item">
                            <img src = {pictureDirectory +'whiteCake.jpg'}></img>
                            <div class = "itemDetails">
                                scrumptious cake 
                            </div>
                        </div>
                        <div class = "item">
                            <img src = {pictureDirectory +'whiteSalmonBowl.jpg'}></img>
                            <div class = "itemDetails">
                                rainbow bowl
                            </div>
                        </div>
                        <div class = "item">
                            <img src = {pictureDirectory +'whiteTart.jpg'}></img>
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