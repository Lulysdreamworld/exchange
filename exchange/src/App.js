import './App.css';
import './root.css';

import { useState } from 'react';

import StatCard from './StatCard/StatCard';
import Inventory from './Inventory/Inventory';
import { items } from './items';


function App() {

  var object = pick(items);

  // Multiply elements by its weight and create new array
  function weight(arr) {
    return [].concat(...arr.map((obj) => Array(Math.ceil(obj.weight * 100)).fill(obj)));
  }

  function pick(arr) {
    let weighted = weight(arr);
    return weighted[Math.floor(Math.random() * weighted.length)]
  }

  return (
    <div className="setup" style={{ backgroundColor: `var(${object.color})` }}>
      <div className="main">
        <Inventory passkit={object.passkit}/>
        <StatCard
          name={object.name}
          weight={object.weight}
          motivation={object.stats.motivation}
          probability={object.stats.probability}
          description={object.description}
        />
        <video className="artwork" src={`${object.artwork}`} width="100%" height="100%" autoPlay muted loop playsInline />
      </div>
    </div>
  );
}

export default App;
