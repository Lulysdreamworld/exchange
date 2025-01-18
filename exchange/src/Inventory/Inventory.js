import './Inventory.css';
import { useState } from 'react';
import { items } from '../items';
import ItemFamily from '../ItemFamily/ItemFamily';
import Wallet from '../Wallet/Wallet';
import Overlay from '../FullScreenOverlay/FullScreenOverlay'

function Inventory({ passkit, os }) {

  const [visibility, setVisibility] = useState(false);

  function handleTap() {
    setVisibility(!visibility);
  }

  return (
    <div className={visibility ? "inventoryWrapper tapped" : "inventoryWrapper"}>

    <div onClick={handleTap} tabIndex="0" className={visibility ? "inventory tapped" : "inventory" }>

      <div className={visibility ? "container tapped" : "container" }>
          <div className='wrapper'>
          
          <p className="label">Index</p>
          </div>
          <p className="item-count">{items.length}</p>
      </div>

      <div className={visibility ? "list tapped" : "list" }>
      <ItemFamily parent={"Cyber Worlding"}/>
      <ItemFamily parent={"Collectible Malls"}/>
      <ItemFamily parent={"Exclusive Hobby"}/>
      <ItemFamily parent={"Gather or Die"}/>
      <ItemFamily parent={"( )"}/>
      </div>

    </div>


    <Wallet visibility={visibility} passkit={passkit}/>
    <Overlay visibility={visibility}/>
    </div>
  );
}

export default Inventory;
