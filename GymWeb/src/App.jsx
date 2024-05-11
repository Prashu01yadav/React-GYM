
import { Outlet } from 'react-router-dom'
import './App.css'
import Bgimage from './Components/Bgimage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


function App() {
  

  return (
    <>
    {/* <Bgimage></Bgimage> */}
    <Navbar></Navbar>
    <div className='layout'>
      <Outlet></Outlet>
    </div>
    <Footer/> 
    </>
  )
}

export default App
