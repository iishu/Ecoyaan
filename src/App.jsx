 import React from 'react'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Moto from "./Components/Moto/Moto"
import Business from "./Components/Business/Business"
 const App = () => {
   return (
     <div>
      <Navbar/>
      <Hero/>
      <Moto/>
      <Business/>
     </div>
   )
 }
 
 export default App