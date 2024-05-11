import React from 'react'
import './Membership.css'
const membership = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
      <h1>EXCELLENCE FITNESS MEMBERSHIP </h1>
      <h2>A MEMBERSHIP THAT FITS AROUND YOUR LIFE</h2>
      <img src="membpic.webp" alt="none" />
      </div>
      <div className='memcontent'>
        {/* <div className='div'>Membership</div> */}
        {/* <div className='div'>prices</div>
        <div className='div'>details</div> */}
       
        {/* <div className='div'>enquiries</div> */}
        {/* <div className='div'>FAQs</div>
        <div className='div'>CONTACT US</div> */}

        {/* <input type="text" name='text' id='member' value="Membership at excellence fitness"></input> */}
        {/* <div type="text" name='text' placeholder='prices' id='prices' />
        <input type="text" name='text' placeholder='Membership details' id='details' />
        <input type="text" name='text' placeholder='Membership enquiries' id='enquiries' />
        <input type="text" name='text' placeholder='Corporate Membership ' id='corporate' />
        <input type="text" name='text' placeholder='FAQs' id='FAQs' /> */}


      </div>
      <div className='cards'>
      
        <div><h1>PRICES</h1></div>
     
      <div className='holder'> 
      <div className='card'>
      <div className='h1'>
      <h1>FEATURES</h1>
      </div>
      <div className='para1'>
      <span>Flexible Time</span>
      <span>Personel Training</span>
      <span>Diet Plan</span>
      <span>Personal Locker</span>
      <span>Protien Supplyment</span>
      <span>Ratings</span>
      <span>JOIN</span>
      </div>
     </div>
     <div className='card'>
      <div className='h1'>
        <h1>SILVER</h1>
      </div>
      <div className='span'>
        <span>✅</span>
        <span>✅</span>
        <span>❌</span>
        <span>❌</span>
        <span>❌</span>
        <span>⭐️⭐️⭐️</span>
        <button className='price'>10k/year</button>
      </div>
     </div>
     <div className='card'>
      <div className='h1'>
        <h1>GOLD</h1>
      </div>
      <div className='span'>
        <span>✅</span>
        <span>✅</span>
        <span>✅</span>
        <span>❌</span>
       <span>❌</span>
        <span>⭐️⭐️⭐️⭐️</span>
        <button className='price'>20k/year</button>
      </div>
     </div>
     <div className='card'>
      <div className='h1'>
        <h1>DIAMOND</h1>
      </div>
      <div className='span'>
        <span>✅</span>
        <span>✅</span>
        <span>✅</span>
        <span>✅</span>
        <span>✅</span>
       
        <span>⭐️⭐️⭐️⭐️⭐️</span>
        <button className='price'>30k/year</button>

      </div>
     </div>
    </div>
    </div>
    
      </div>
  )
}

export default membership