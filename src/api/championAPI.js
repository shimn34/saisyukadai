// チャンピオンごとのカウンターアイテム設定
const counterItemsByChampion = {
    Ahri: [
        { id: "3111", name: "Mercury's Treads", imageUrl: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/3111.png" },
        { id: "3157", name: "Zhonya's Hourglass", imageUrl: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/3157.png" },
    ],
    Yasuo: [
        { id: "3046", name: "Phantom Dancer", imageUrl: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/3046.png" },
        { id: "3072", name: "Bloodthirster", imageUrl: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/3072.png" },
    ],
    Darius: [
        { id: "3075", name: "Thornmail", imageUrl: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/3075.png" },
        { id: "3110", name: "Frozen Heart", imageUrl: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/3110.png" },
    ],
};

// チャンピオンデータ取得
export const fetchChampionData = async (championName) => {
    // チャンピオン画像URLを生成
    const championImageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`;

    // 対応するカウンターアイテムを取得
    const counterItems = counterItemsByChampion[championName] || [
        { id: "1001", name: "Boots", imageUrl: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/1001.png" }, // デフォルトアイテム
    ];

    // チャンピオンデータを返す
    return {
        name: championName,
        imageUrl: championImageUrl,
        counterItems,
    };
};
