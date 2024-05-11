import React from 'react'
import Locationgym from './Locationgym'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
const Footer = () => {
  return (
    <>
    <div className='location-link'>
<div className='para'>
  <h1><span className='text-red'> Our Location</span></h1>
   <p>Mondal house, Bapu Ashram Rd, <br />
    opposite Ms Bose marbel, Mirzapur,<br />
     Techno City, Ranabhutia, West Bengal 700150 <br />
     Phone No. : 9519033436 <br />
     Email : prashantyadav1122002@gmail.com</p>

     <div className='social'>
     <h1><span className='text-red'> 
     Social Link<FontAwesomeIcon icon={fab.faInstagram} /></span></h1>

     </div>
     </div>
  <div className='location'>
    
    <div className='location-box'>
      <h1>MAP</h1>
  <Locationgym></Locationgym>
  </div>
  </div>
  </div>
    </>
  )
}

export default Footer