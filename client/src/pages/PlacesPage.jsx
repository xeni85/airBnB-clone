import React from 'react'
import { Link, useParams } from 'react-router-dom'

const PlacesPage = () => {
  const {action } = useParams();
  return (
    <div>
        {action != 'new' && (<div className='places-container'>
            <Link className='places-link-new my-profile my-bookings ' to={'/account/places/new'}>Add a place</Link>
        </div>)}
        {action === 'new' && (<div className='places-container'>
            <form className='place-form'>
              <h2>Title</h2>
              <input type="text" placeholder='title, for example: Apartment'/>
              <h2>Address</h2>
              <input type="text" placeholder='Address'/>
              <h2>Photos</h2>
              <input type="text" placeholder='Add a photo link'/>
              <button>+</button>
              <div className='photo-container'></div>
              <h2>Description</h2>
              <textarea placeholder='Description'></textarea>
              <h2>Perks</h2>
              <div>
                <label htmlFor="">
                  <input type="checkbox" />
                  <span>Wifi</span>
                  </label>
              </div>
            </form>
        </div>)}
        
    </div>
  )
}

export default PlacesPage