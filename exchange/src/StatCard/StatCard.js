import './StatCard.css';
import { useState } from 'react';

function StatCard({ name, weight, motivation, probability, description }) {

  const [visibility, setVisibility] = useState(false);
  
  function handleTap() {
    setVisibility(!visibility);
  }

  return (
    <div className={visibility ? "statCard" : "statCard-hidden"} onClick={handleTap}>

      <div className="container">

        <div className="stat">
          <p className="label">Name</p>
          <h1 className="value title">{name}</h1>
        </div>

        <div className="statGroup">
          <div className="stat">
            <p className="label">Mot</p>
            <p className="value">{motivation}</p>
          </div>
          <div className="stat">
            <p className="label">Prob</p>
            <p className="value">{probability}</p>
          </div>
          <div className="stat">
            <p className="label">Odds</p>
            <p className="value">{weight}</p>
          </div>
        </div>

      </div>

      <p className={visibility ? "description" : "hide"}>{description}</p>

    </div>
  );
}

export default StatCard;
