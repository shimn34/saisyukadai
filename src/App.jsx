import React, { useState } from "react";
import ChampionSearch from "./components/ChampionSearch";
import ChampionCard from "./components/ChampionCard";
import { fetchChampionData } from "./api/championAPI";

const App = () => {
    const [selectedChampion, setSelectedChampion] = useState(null);

    const handleSearch = async (championName) => {
        const data = await fetchChampionData(championName);
        setSelectedChampion(data);
    };

    return (
        <div className="container">
            <h1>League of Legends Champion Counter</h1>
            <ChampionSearch onSearch={handleSearch} />
            {selectedChampion && <ChampionCard champion={selectedChampion} />}
        </div>
    );
};

export default App;
