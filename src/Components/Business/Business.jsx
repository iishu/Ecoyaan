import React from 'react'
import "./Business.css"
import OurStory4 from "../../assets/OurStory4.png"

const Moto = () => {
  return (
    <div className="business">
        <div className="business-text">
        <h1>JFor businesses that care deeply about sustainability</h1>
            <p>Do you run a business that is committed to sustainability in every aspect of your work?</p>
            
            <p>Do you want to showcase your products to an incredible audience of eco-conscious consumers who care?</p>
            <p>If yes, then you are the perfect fit for our platform. Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability. Contact us today.</p>
       
        </div>
         <div className="business-image">
        <img src={OurStory4} alt="Sustainable future illustration"/>
        </div>
     </div>
  )
}

export default Business