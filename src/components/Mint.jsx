import React from 'react'
import mint from '../assets/images/Group 11.png'
import img from "../assets/images/Group 37.png";




const Mint = () => {
  return (
    <div className="mint">
      <img src={mint} alt="" />

      <div className="tabs">
        <h4>Quantity</h4>
        <button>X5</button>
      </div>

      <div className="tabs">
        <h4>Total NFTs</h4>
        <button>5</button>
      </div>

      <div className="tabs">
        <h4>Total Cost</h4>
        <button>25 $Peacock</button>
      </div>

      <div className="mint-btn">
        <img src={img} alt="" />
        <h4>Mint</h4>
      </div>
    </div>
  );
}

export default Mint
