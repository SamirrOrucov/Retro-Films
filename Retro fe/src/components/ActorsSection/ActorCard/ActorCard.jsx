import React from 'react'
import "./ActorCard.scss"

function ActorCard({image,name,city}) {
  return (
    <div className='actorCard'>
      <div className="actorCard_container">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="info">
          <div className="name">
            <p>{name}</p>
          </div>
          <div className="location">
            <p><span>City:</span>{city}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActorCard