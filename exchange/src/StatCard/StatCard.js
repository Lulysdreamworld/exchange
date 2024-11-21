import './StatCard.css';

function StatCard({name, value, motivation, probability}) {
  return (
    <div className="statCard">
      <div className="stat">
        <p className="label">Name</p>
        <h1 className="value title">{name}</h1>
      </div>

      <div className="statGroup">
        <div className="stat">
          <p className="label">Val</p>
          <p className="value">{value}</p>
        </div>

        <div className="stat">
          <p className="label">Mot</p>
          <p className="value">{motivation}</p>
        </div>

        <div className="stat">
          <p className="label">Prob</p>
          <p className="value">{probability}</p>
        </div>

      </div>

    </div>
  );
}

export default StatCard;
