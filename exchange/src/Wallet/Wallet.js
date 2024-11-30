import './Wallet.css';
import { useState } from 'react';

function Wallet({ visibility, passkit }) {

  console.log(visibility)

  return (
    <a href={passkit} className={visibility ? "wallet tapped" : "wallet"}>

      <div className="container">
          <div className='wrapper'>
          <p className="label">Add to Wallet</p>
          <div className="indicator"></div>
          </div>
      </div>
    </a>
  );
}

export default Wallet;
