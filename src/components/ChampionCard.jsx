import React from "react";

function ChampionCard({ championData }) {
    return (
        <div>
            <h2>{championData.name}</h2>
            <img
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championData.name}_0.jpg`}
                alt={championData.name}
            />
            <div>
                <h3>Counter Items:</h3>
                <ul>
                    {championData.counterItems.map((item) => (
                        <li key={item.id}>
                            <img
                                src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/${item.id}.png`}
                                alt={item.name}
                                width="50"
                                height="50"
                            />
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ChampionCard;
