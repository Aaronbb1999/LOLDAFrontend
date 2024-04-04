import React from 'react';
import './ChampBan.css'; 

function ChampBan({ champName, isBlue }) {
  const imagePath = require(`../../resources/ChampIcon/${champName}_0.jpg`);

  return (
    <div className={`champ-ban ${isBlue ? '' : 'red-ban'}`}>
        <img src={imagePath} alt={champName} className="champ-image" />
    </div>
  );
}

export default ChampBan;