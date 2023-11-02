import React, { useState } from 'react'
import "./Location.css"
import Location_card from './Location_card'

const Locations = (props) => {
    
   
 
  return (
    <div>
       
       
       <div className="grid" >
    { props.data.places && props.data.places.map((e)=>{
      return(

            <Location_card placeName = {e["place name"]} state = {e.state} longitute={e.longitude} key={e["place name"]}/>
            )
          })}
          </div>
    </div>
  )
}

export default Locations
