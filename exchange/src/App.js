import './App.css';
import './root.css';

import StatCard from './StatCard/StatCard';
import { items } from './items';
import video1 from './test.mp4'


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
    <div className="setup" style={{ backgroundColor: `${object.color}` }}>
      <div className="main">
        <video src={video1} width="100%" height="100%" autoPlay muted loop />
        <StatCard
          name={object.name}
          value={object.stats.value}
          motivation={object.stats.motivation}
          probability={object.stats.probability}
          description={object.description}
        />
      </div>
    </div>
  );
}

export default App;
