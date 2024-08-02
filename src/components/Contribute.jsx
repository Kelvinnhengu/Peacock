import React from 'react'
import cont from '../assets/images/contribute.png'
import img from '../assets/images/Groupy.png'

const Contribute = () => {
  return (
    <section className="contribute">
      <img src={cont} alt="" />
      <p>Share your ideas on how to better the collective</p>

      <form  action="">
        <textarea name="" id="form" placeholder="start typing"></textarea>
      </form>
      <button className='btn'>
          <img src={img} alt="" />
          <h4>Submit</h4>
      </button>
    </section>
  );
}

export default Contribute
