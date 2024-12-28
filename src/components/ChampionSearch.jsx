import React, { useState } from "react";

function ChampionSearch({ onSearch }) {
    const [championName, setChampionName] = useState("");

    const handleInputChange = (event) => {
        setChampionName(event.target.value);
    };

    const handleSearchClick = () => {
        if (championName) {
            onSearch(championName);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={championName}
                onChange={handleInputChange}
                placeholder="Enter Champion Name"
            />
            <button onClick={handleSearchClick}>Search</button>
        </div>
    );
}

export default ChampionSearch;
