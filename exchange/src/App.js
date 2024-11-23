import './App.css';
import './root.css'
import StatCard from './StatCard/StatCard';
import { items } from './items';
import video1 from './test.mp4'

function App() {
  return (
    <div className="setup" style={{backgroundColor: `${items[1].color}`}}>
      <div className="main">
       <video src={video1} width="100%" height="100%" autoPlay muted loop />
      <StatCard 
      name={items[1].name}
      value={items[1].stats.value}
      motivation={items[1].stats.motivation}
      probability={items[1].stats.probability}
      />
      </div>
    </div>
  );
}

export default App;
