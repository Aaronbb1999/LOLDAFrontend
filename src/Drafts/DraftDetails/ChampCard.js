import React from 'react';
import './ChampCard.css'; 

function ChampCard({ champName, isBlue }) {
  const imagePath = require(`../../resources/Champs/${champName}_0.jpg`);

  return (
    <div className={`champ-card ${isBlue ? '' : 'red-card'}`}>
        <img src={imagePath} alt={champName} className="champ-image" />
        <div className={`champ-name ${isBlue ? '' : 'red-name'}`}>
            <h3>{champName}</h3>
        </div>
    </div>
  );
}

export default ChampCard;