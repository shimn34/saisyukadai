import React, { useState } from "react";
import ChampionSearch from "./components/ChampionSearch";
import ChampionCard from "./components/ChampionCard";
import { fetchChampionData } from "./api/championAPI";

function App() {
    const [championData, setChampionData] = useState(null);

    const handleSearch = (championName) => {
        fetchChampionData(championName).then((data) => setChampionData(data));
    };

    return (
        <div>
            <h1>League of Legends Counter Items</h1>
            <ChampionSearch onSearch={handleSearch} />
            {championData && <ChampionCard championData={championData} />}
        </div>
    );
}

export default App;
