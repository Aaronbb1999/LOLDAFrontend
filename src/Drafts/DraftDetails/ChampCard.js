import React from 'react';
import './ChampCard.css'; 

function ChampCard({ champName }) {
  const imagePath = require(`../../resources/Champs/${champName}.jpg`);

  return (
    <div className="champ-card">
        <img src={imagePath} alt={champName} className="champ-image" />
        <div className="champ-name">
            <h3>{champName}</h3>
        </div>
    </div>
  );
}

export default ChampCard;