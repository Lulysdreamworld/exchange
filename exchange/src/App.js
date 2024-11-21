import './App.css';
import StatCard from './StatCard/StatCard';
import { items } from './items';

function App() {
  console.log(items[1].name)
  return (
    <div className="setup" style={{backgroundColor: `${items[1].color}`}}>
      <div className="main">
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
