import React, {useState} from 'react'
import { Link, useParams } from 'react-router-dom'

const PlacesPage = () => {
  const {action } = useParams();
  const [title,setTitle] = useState('');
  const [address,setAddress] = useState('');
  const [addedPhotos,setAddedPhotos] = useState([]);
  const [description,setDescription] = useState('');
  const [perks,setPerks] = useState([]);
  const [extraInfo,setExtraInfo] = useState('');
  const [checkIn,setCheckIn] = useState('');
  const [checkOut,setCheckOut] = useState('');
  const [maxGuests,setMaxGuests] = useState(1);
  const [redirect,setRedirect] = useState(false);

  async function addPhoto(e) {
    e.preventDefault();
    await axios.post('/upload-by-link', {
      link: photoLink
    })
  }
  return (
    <div>
        {action != 'new' && (<div className='places-container'>
            <Link className='places-link-new my-profile my-bookings ' to={'/account/places/new'}>Add a place</Link>
        </div>)}
        {action === 'new' && (<div className='places-container'>
            <form className='place-form'>
              <h2>Title</h2>
              <input type="text" placeholder='title, for example: Apartment'value={title} onChange={e => setTitle(e.target.value)}/>
              <h2>Address</h2>
              <input type="text" placeholder='Address'value={address} onChange={e => setAddress(e.target.value)}/>
              <h2>Photos</h2>
              <input type="text" placeholder='Add a photo link' addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
              <button onClick={addPhoto}>+</button>
              <div className='photo-container'></div>
              <h2>Description</h2>
              <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
              <h2>Perks</h2>
              <div className='checkbox-container' selected={perks} onChange={setPerks}>
                <label htmlFor="" >
                  <input type="checkbox" />
                  <span>Wifi</span>
                  </label>
                <label htmlFor="">
                  <input type="checkbox" />
                  <span>Parking</span>
                  </label>
                <label htmlFor="">
                  <input type="checkbox" />
                  <span>Pets</span>
                  </label>
                <label htmlFor="">
                  <input type="checkbox" />
                  <span>Private Entrance</span>
                  </label>
                <label htmlFor="">
                  <input type="checkbox" />
                  <span>TV</span>
                  </label>
              </div>
              <h2>Extra Info</h2>
              <textarea value={extraInfo} onChange={e => setExtraInfo(e.target.value)}></textarea>
              <h2>Check In & Out times, max guests</h2>
              <div className='check-in-out'>
                <div><h3>Check in time</h3><input type="text" placeholder='2PM'value={checkIn}
                   onChange={e => setCheckIn(e.target.value)}/>
                </div>
                <div><h3>Check out time</h3><input type="text" placeholder='10AM'value={checkOut}
                   onChange={e => setCheckOut(e.target.value)}/></div>
                <div><h3>Max number of guests</h3><input type="text" placeholder='4'value={maxGuests}
                   onChange={e => setMaxGuests(e.target.value)}/></div>
              </div>
            </form>
        </div>)}
        
    </div>
  )
}

export default PlacesPage