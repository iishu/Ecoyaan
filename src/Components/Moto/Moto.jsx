import React from 'react'
import "./Moto.css"
import Impact from "../../assets/Impact.png"

const Moto = () => {
  return (
    <div className="moto">
        <div className="moto-text">
        <h1>Join our community in creating a more sustainable future for everyone</h1>
            <p>At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.</p>
            <p>Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.</p>
       
        </div>
         <div className="moto-image">
        <img src={Impact} alt="Sustainable future illustration"/>
        </div>
     </div>
  )
}

export default Moto