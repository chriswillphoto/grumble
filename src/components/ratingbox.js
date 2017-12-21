import React from 'react'

const RatingBox = (props) => {
  return(
    <div className="ratingbox">
      <div className="likebox"><i className="fa fa-thumbs-o-up"></i> <h4>{props.likes}</h4></div>
      <div className="dislikebox"><i className="fa fa-thumbs-o-down"></i><h4>{props.dislikes}</h4></div>
    </div>
  )
}

export default RatingBox
