import React from 'react'
import pic from '../assets/images/Group 6.png'
import img from '../assets/images/Image1.png'


const JohnDoe = () => {
  return (
    <section className="JohnDoe">
      <div className="img">
        <img className='pic' src={pic} alt="" />
      </div>

      <div className="johnDoe">
        <div className="card">
          <img src={img} alt="" />
          <h4>John Doe</h4>
          <p>Founder & Curator</p>
        </div>
        <div className="card">
          <img src={img} alt="" />
          <h4>John Doe</h4>
          <p>Founder & Curator</p>
        </div>
        <div className="card">
          <img src={img} alt="" />
          <h4>John Doe</h4>
          <p>Founder & Curator</p>
        </div>
        <div className="card">
          <img src={img} alt="" />
          <h4>John Doe</h4>
          <p>Founder & Curator</p>
        </div>
        <div className="card">
          <img src={img} alt="" />
          <h4>John Doe</h4>
          <p>Founder & Curator</p>
        </div>
      </div>
    </section>
  );
}

export default JohnDoe
