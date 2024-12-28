import React, { useState } from "react";
import { getChampionList } from "../api/championAPI";

const ChampionSearch = ({ onSearch }) => {
    const [input, setInput] = useState("");
    const championList = getChampionList();

    const handleSearch = () => {
        if (championList.includes(input)) {
            onSearch(input);
        } else {
            alert("Champion not found!");
        }
    };

    return (
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <input
                type="text"
                placeholder="Enter champion name"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{
                    padding: "10px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                }}
            />
            <button
                onClick={handleSearch}
                style={{
                    marginLeft: "10px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#ff7e5f",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Search
            </button>
        </div>
    );
};

export default ChampionSearch;
