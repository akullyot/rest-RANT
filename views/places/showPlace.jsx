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
  let rating = (
    <h5 className = "inactive">
        Not yet Rated
    </h5> 
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((total, comment) =>
    {
      return total + comment.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length);
    let stars = ""
    for (let i = 0; i < averageRating; i++)
    {
      stars += '✩'
    }
    rating = (
      <h1 className = "noAnimation">
        {stars}
      </h1>
    )
    comments = data.place.comments.map(comment => {
      return (
        <div className="comment">
          <h4 className="rant">{comment.isPositive ? 'Rave!' : 'Rant!'}</h4>
          <div className='commentContent'> 
              <h5>{comment.content}</h5>
              <h3>
                <stong>- {comment.author}</stong>
              </h3>
              <h5>Rating: {comment.stars}</h5>
          </div>
          <form method="POST" action={`/places/${data.place.id}/comment/${comment.id}?_method=DELETE`}>
            <input type="submit" className="btn btn-danger" value="Delete Comment" />
          </form>
          
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
                  <h4> Restauraunt Picture:</h4>
                  <img id = "placeImage"  src = {data.place.pic} alt = {data.place.name}></img>
              </div>
              <div id = "RHSDescription">
                <h2> Rating </h2>
                {rating}
                <h2> Description</h2>
                <ul>
                  <li> <h3> {data.place.showEstablished()}</h3></li>
                  <li> <h3> Cusine styles include : {data.place.cuisines}</h3></li>
                </ul>
                <button className="btn btn-warning descripButton">
                    <a href={`/places/${data.place.id}/edit`} > 
                        Edit {data.place.name}
                    </a>
                </button>
                <br/>
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger descripButton">
                    Delete {data.place.name}
                  </button>
              </form> 
     

              </div>
            </section>
            <section id = "commentsSection">
              <h2 className='titleDivider'> Comments Section </h2>
              <section className = "commentSubSection">
                    {comments}
              </section>
              <h2 className='titleDivider'> Create A New Comment</h2>
              <section className = "commentSubSection">
                <form method='POST' action={`/places/${data.place.id}/comment`}>
                  <div className='form-group'>
                    <label htmlFor='author'>Your Name:</label>
                    <input className='form-control' id='author' name='author'/>
                  </div>

                  <div className='form-group'>
                    <label htmlFor='content'>Comment:</label>
                    <input className='form-control' id='content' name='content' type='textarea' />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='stars'>Star Rating:</label>
                    <input className='form-control' id='stars' name='stars' type='range' step='0.5' min='0' max='5' />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='isPositive'>Did you Like it?</label>
                    <input  id='isPositive' name='isPositive' type='checkbox' defaultChecked/>
                  </div>

                  <input className='btn btn-primary' type='submit' value='Add Comment' />
                </form>
              </section>
            </section>
          </main>
        </GenerateSkeletonHtml>
    )
}

module.exports = generateShowPage
