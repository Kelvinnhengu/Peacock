import React from 'react'
import img from "../assets/images/Group 35.png"
const Hero = () => {
  return (
    <section className="hero">
      <div className="top">
        <h1>The</h1>
        <div className="peacock">
          <img src={img} alt="" />
        </div>

        <h1>Collective</h1>
      </div>

      <div className="mid">
        <h5>Join the Flock</h5>

        <div className="discover">
          <h5>discover</h5>
          <div className="line"></div>
        </div>
      </div>

      <div className="bottom">
        <div className="heading">
          <h1>The</h1>
          
            <img src={img} alt="" />
          

          <h1>Collective</h1>
        </div>

        <h2>Is just that - a collective.</h2>

        <div className="para">
            <p>A collective of early adopters and innovators to create a brand and a community</p>
            <p>The metaverse is space of infinite opportunities and the best way to navigate it is together</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
