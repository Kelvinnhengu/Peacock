import React from 'react'
import img from "../assets/images/Groupy.png";

const Join = () => {
  return (
    <section className="join">
      <div className="box1">

      </div>
      <div className="box2">
        <div className="para">
          <p>
            The collective is a collection of 5500 Peacocks that are the access
            cards to the Tropic
          </p>
          <p>
            These fowls serve as a membership pass to not just live events,
            extensive merchandise and NFT drops but also as a one of its kind
            pass to experinces and venues that can be accessed much more
            frequently (think once a week) at your discretion navigate it, is
            together.
          </p>
          <p>
            The Topic will be a place for the collective to think, create and
            contribute to the community by participating in all major decisions
            for the future.
          </p>
        </div>

        <div className="text">
          <img src={img} alt="" />
          <h4>Join The Flock</h4>
        </div>
      </div>
    </section>
  )
}

export default Join
