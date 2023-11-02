import React from 'react'
import "./Location_card.css"
function Location_card(props) {
  return (
    <div>
      <div className="container">
     
        <p className="PlaceName">{props.placeName}</p>
        <p className="longitude">Longitute:{props.longitute}</p>
        <p className="state">{props.state}</p>
      </div>
    </div>
  )
}

export default Location_card
