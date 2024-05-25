import React from 'react'
import './About.css'
// import follow from "../../assets/follow.png"
const About = () => {
  return (
    <div id="about" className='about'>
       <div className='about-title'>
          
          {/* <img src={follow} alt=""></img> */}
       
        
          <h1>About Us</h1>
           <div className="about-para">
            <p>
            At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.
            </p>
            <p>We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:</p>
             {/* <ul>
              <li>Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</li>
              <li>Videos, posts, and quizzes on climate change and sustainability</li>
              <li>Events and pledges that invite you to adopt a more sustainable lifestyle</li>
             </ul> */}
           </div>
        </div>

        </div>
     
  )
}

export default About