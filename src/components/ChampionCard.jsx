import React from "react";

const ChampionCard = ({ champion }) => {
    return (
        <div className="card">
            <img
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.name}_0.jpg`}
                alt={champion.name}
            />
            <h2>{champion.name}</h2>
            <div className="items">
                {champion.counterItems.map((item, index) => (
                    <div key={index} className="item">
                        <img src={item} alt={`Item ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChampionCard;
