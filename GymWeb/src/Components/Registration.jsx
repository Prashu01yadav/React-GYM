import React from 'react'
import './Registration.css'
const Contactus = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <h1>REGISTER TO JOIN <br /> THE EXCELLENCE FITNESS </h1>
      <img src="regpic.jpeg" alt="none" />
    </div>
    <div className='formhold'>
    
    <form>
   
      <div className='form'>
         {/* <img src="regbg.jpeg" alt="none" /> */}
        <h1>Registration</h1>
        <div className='user'>
        <label htmlFor="User-name">User Name</label>
        <input type="text" placeholder='Enter User Name' />
      </div>
      <div className='user'>
        <label htmlFor="User-name">Enter Email</label>
        <input type="email" placeholder='Enter User Email' />
      </div>
      <div className='user'>
        <label htmlFor="User-name">Password</label>
        <input type="password" placeholder='Enter passsword' />
      </div>
      <h1>Payment Info</h1>
      <div className='user'>
        <label htmlFor="User-name">Package </label>
        <input type="text" placeholder='Package' />
      </div>
      <div className='user'>
        <label htmlFor="User-name">Account</label>
        <input type="text" placeholder=' Account' />
      </div>
      <button className='register'>Register</button>
      </div>
    </form>
    </div>
    </div>

  )
}

export default Contactus
