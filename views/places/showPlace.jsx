//This requires React and the basic, skeleton HTML generator for every page
const React = require('react');
//Identification: the function skeletonHTML from skeletonHTMLDefault.jsx that has been exported to node.modules
//Purpose: Generates the basic backbone of every HTML page 
//Note: React components must be PascalCase
const GenerateSkeletonHtml = require('../skeletonHTMLDefault.jsx');

function generateShowPage (data) {

  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(comment => {
      return (
        <div className="border">
          <h2 className="rant">{comment.isPositive ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
          <h4>{comment.content}</h4>
          <h3>
            <stong>- {comment.author}</stong>
          </h3>
          <h4>Rating: {comment.stars}</h4>
        </div>
      )
    })
  }

    return (
        <GenerateSkeletonHtml  information = {data.skeletonData}>
          <main>
            <h1 className='noAnimation'> {data.place.name}</h1>
            <section id = "descriptionSection">
            <div id = "LHSDescription">
                  <img id = "placeImage" src = {data.place.pic} alt = {data.place.name}></img>
              </div>
              <div id = "RHSDescription">
                <h2> Rating </h2>
                <p> Currently not rated</p>
                <h2> Description</h2>
                <ul>
                  <li> <h3> {data.place.showEstablished()}</h3></li>
                  <li> <h4> Cusine styles include : {data.place.cuisines}</h4></li>
                </ul>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                    Edit {data.place.name}
                </a>
                <br/>
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
              </form> 
     

              </div>
            </section>
            <section id = "commentsSection">
              <h2> Comments Section </h2>
              <section id = "commentSubSection">
                    {comments}
              </section>
            </section>
          </main>
        </GenerateSkeletonHtml>
    )
}

module.exports = generateShowPage
