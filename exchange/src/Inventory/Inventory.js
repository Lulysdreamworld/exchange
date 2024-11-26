import './Inventory.css';
import { useState } from 'react';
import { items } from '../items';
import ItemFamily from '../ItemFamily/ItemFamily';

function Inventory() {

  const [visibility, setVisibility] = useState(false);

  function handleTap() {
    setVisibility(!visibility);
  }

  return (
    <div onClick={handleTap} className={visibility ? "inventory tapped" : "inventory" }>

      <div className={visibility ? "container tapped" : "container" }>
          <div className='wrapper'>
          <div className="indicator"></div>
          <p className="label">Inventory</p>
          </div>
          <p className="item-count">{items.length} {visibility ? "Items" : "" }</p>
      </div>

      <div className={visibility ? "list tapped" : "list" }>
      <ItemFamily parent={"Cyber Worlding"}/>
      <ItemFamily parent={"Collectible Malls"}/>
      <ItemFamily parent={"Gather or Die"}/>
      <ItemFamily parent={"Exclusive Hobby"}/>
      <ItemFamily parent={"( )"}/>
      </div>

    </div>
  );
}

export default Inventory;
