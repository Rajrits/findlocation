import React, { useState } from 'react'
import "./Home.css"


import LoadingSpin from 'react-loading-spin'

function Home(props) {

  return (
    <div className='home'>
      <div className='heading'>

      <h1 >Find My Location</h1>
      <label htmlFor="PostalCode">Enter Postal Code below</label>
      <div className='postalcodeAndSearchBtn'>
      <input type="text" onChange={props.OnPostalCodeEnter} value={props.postalcode} id='PostalCode' />
      <button onClick={props.handleOnSearch} className='searchBtn'>Search</button>
      <button onClick={props.handleOnReset} className='searchBtn'>Reset</button>
      {!props.loading && !props.error && <>
       <p className="country">{props.data.country}</p>
      <p className="Pincode">{props.data["post code"]}</p>
      </>
      }
      </div>
      {props.loading &&<LoadingSpin/>}
      {props.error && <p className='error'>Could Not fetch the data enter valid postal code </p>}
      </div>
    </div>
  )
}

export default Home
