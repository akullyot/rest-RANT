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
    return(
        <GenerateSkeletonHtml information = {data}>
            <main>
                <section id="photoCollage">
                    <div id = "row1" className = "homeRow">
                        <div className = "item">
                            <img src ={pictureDirectory +'whiteCake.jpg'}></img>
                            <div className = "itemDetails">
                                Scrumptious  Cake
                            </div>
                        </div>
                        <div className = "item">
                            <img src = {pictureDirectory +'whiteEggToast.jpg'}></img>
                            <div className = "itemDetails">
                                perfect breakfast
                            </div>
                        </div>
                        <div className = "item">
                            <img src = {pictureDirectory +'whiteFruitBowl.jpg'}></img>
                            <div className = "itemDetails">
                                refreshing salsa
                            </div>
                        </div>
                        <div className = "item">
                            <img src = {pictureDirectory +'whiteLatte.jpg'}></img>
                            <div className = "itemDetails">
                                delicious latte
                            </div>
                        </div>
                        <div className = "item">
                            <img src = {pictureDirectory +'whitePancake.jpg'}></img>
                            <div className = "itemDetails">
                                whimsical pancake
                            </div>
                        </div>
                        <div className = "item">
                            <img src = {pictureDirectory +'whitePearBowl.jpg'}></img>
                            <div className = "itemDetails">
                                unique salad
                            </div>
                        </div>
                    </div>
                    <div id= "row2" className = "homeRow"> 
                        <h1>Welcome to Rest-RANT, a restaurant reviewing service</h1>
                    </div>
                    <div id = "row3" className = "homeRow">
                        <div className = "item">
                            <img src = {pictureDirectory +'whitePokeBowl.jpg'}></img>
                            <div className = "itemDetails">
                                colorful poke
                            </div>
                        </div>
                        <div className = "item">    
                            <img src = {pictureDirectory +'whiteSalad.jpg'}></img>
                            <div className = "itemDetails">
                                sublime salad
                            </div>
                        </div>
                        <div className = "item">
                            <img src = {pictureDirectory +'whiteSalmon.jpg'}></img>
                            <div className = "itemDetails">
                                perfect salmon
                            </div>
                        </div>
                        <div className = "item">
                            <img src = {pictureDirectory +'whiteCake.jpg'}></img>
                            <div className = "itemDetails">
                                scrumptious cake 
                            </div>
                        </div>
                        <div className = "item">
                            <img src = {pictureDirectory +'whiteSalmonBowl.jpg'}></img>
                            <div className = "itemDetails">
                                rainbow bowl
                            </div>
                        </div>
                        <div className = "item">
                            <img src = {pictureDirectory +'whiteTart.jpg'}></img>
                            <div className = "itemDetails">
                                refreshing tart
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </GenerateSkeletonHtml>
    );
}

module.exports = generateHomeChildrenHTML;