 import React from 'react'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Moto from "./Components/Moto/Moto"
import Business from "./Components/Business/Business"
import Contact from './Components/Contact/Contact'
import About from "./Components/About/About"
const App = () => {
   return (
     <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Moto/>
      <Business/>
      <Contact/>
       
     </div>
   )
 }
 
 export default App