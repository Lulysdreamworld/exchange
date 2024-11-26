import './Inventory.css';
import { useState } from 'react';
import { items } from '../items';

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

    </div>
  );
}

export default Inventory;
