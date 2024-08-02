import React from 'react'

import logo from '../assets/images/Image2.png'
import discord from '../assets/images/discord.png'
import twitter from '../assets/images/twitter.png'
import insta from '../assets/images/instagram.png'

const Footer = () => {
  return (
    <section  className='Footer'>
        <div className="logo">
            <img className='lg' src={logo} alt="" />
        </div>
        <div className="followUs">
            <h5>Follow us <img src={discord} alt="" /><img src={twitter} alt="" /><img src={insta} alt="" /></h5>
        </div>
    </section>
  )
}

export default Footer
