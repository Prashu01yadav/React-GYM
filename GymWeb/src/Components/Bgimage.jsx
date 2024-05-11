import React from 'react'
import Navbar from './Navbar'
import Locationgym from './Locationgym'

function Bgimage() {
  return (
    <>
    <div className='Bgimage'>

 {/* <Navbar></Navbar> */}
 <div className='quote'>
    <h1>THE <span className='text-red1'>PAIN</span> YOU FEEL<br></br> TODAY IS THE <span className='text-red1'>STRENGTH</span> <br></br>YOU NEED TOMMORROW</h1>
    <button className='join'>JOIN</button>
    </div>
    
    </div>
    <div className='form'>

    </div>
    <div className='input'>
    <h1><span className='text-red'> EXPERIENCE THE EXCELLENCE FITNESS <br />
    AT KOLKATA'S FRIENDLIEST GYM IN GARIA</span></h1>
    <div className='input2'>
      <input type="text" name='name' id='name' placeholder='Name' />
      <input type="email" name='email' id='email' placeholder='Email' />
      <input type="number" name='number' id='number' placeholder='Number' />
      <select name="select" id="select">
      <option value="">Choose One</option>
      <option value="free">Free 1 Day Pass</option>
      <option value="Complementary">complementar Personal Training Session</option>
      <option value="yoga">Complementary yoga class</option>
      <option value="zumba">Complementary Zumba class</option>
      <option value="diet">Proper diet plan</option>

      </select>
      
    </div>
    <button className='button2'> Submit</button>
    </div>
    <div className='img-container'>
    <div className='text1'>
      <div className='divi'>
      
      <h1>JOIN EXCELLENCE FITTNESS TODAY</h1>
      <h2><u>Experience the Excellence Fittness at Kolkata in Gariya</u></h2>
      <h2><li>Secure parking given 🚲 🚗</li></h2>
      <h2><li>Personel locker  </li></h2>
      <h2><li>Clean and fresh environment 🏞️</li></h2>
      <h2><li>Personel training with proper diet  </li> </h2>
      </div>
    </div>
    
    <div className='img-content'>
    <div className='img-box'>
      <div id='img-1'></div>
      <div id='img-2'></div>
      <div id='img-3'></div>
      <div id='img-4'></div>
      <div id='img-5'></div>
    
  </div>
  </div>
  </div>
  {/* <div className='location-link'>
<div className='para'>
  <h1><span className='text-red'> Our Location</span></h1>
   <p>Mondal house, Bapu Ashram Rd, <br />
    opposite Ms Bose marbel, Mirzapur,<br />
     Techno City, Ranabhutia, West Bengal 700150 <br />
     Phone No. : 9519033436 <br />
     Email : prashantyadav1122002@gmail.com</p>

     <div className='social'>
     <h1><span className='text-red'> Social Link</span></h1>

     </div>
     </div>
  <div className='location'>
    
    <div className='location-box'>
      <h1>MAP</h1>
  <Locationgym></Locationgym>
  </div>
  </div>
  </div> */}
  </>
  )
}

export default Bgimage