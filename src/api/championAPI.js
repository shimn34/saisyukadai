const championData = {
    Aatrox: { name: "Aatrox", counterItems: ["1029", "3076", "3047"] },
    Ahri: { name: "Ahri", counterItems: ["3157", "3111"] },
    Akali: { name: "Akali", counterItems: ["3157", "1054"] },
    Akshan: { name: "Akshan", counterItems: ["3076", "3047", "3143"] },
    Alistar: { name: "Alistar", counterItems: ["3111", "3047", "3009"] },
    Ambessa: { name: "Ambessa", counterItems: ["3157", "3076"] },
    Amumu: { name: "Amumu", counterItems: ["3193", "3076", "3111"] },
    Anivia: { name: "Anivia", counterItems: ["3157", "3026"] },
    Annie: { name: "Annie", counterItems: ["3157", "3111"] },
    Aphelios: { name: "Aphelios", counterItems: ["3076", "3047", "3143"] },
    Ashe: { name: "Ashe", counterItems: ["3076", "3047", "3143"] },
    AurelionSol: { name: "AurelionSol", counterItems: ["3157", "3111"] },
    Aurora: { name: "Aurora", counterItems: ["3193", "3076", "3111"] },
    Azir: { name: "Azir", counterItems: ["3157", "3111"] },
    Bard: { name: "Bard", counterItems: ["3111", "3047", "3009"] },
    BelVeth: { name: "Bel'Veth", counterItems: ["3076", "3047", "3143"] },
    Blitzcrank: { name: "Blitzcrank", counterItems: ["3111", "3047", "3065"] },
    Brand: { name: "Brand", counterItems: ["3157", "3111"] },
    Braum: { name: "Braum", counterItems: ["3076", "3047", "3143"] },
    Briar: { name: "Briar", counterItems: ["3076", "3047", "3143"] },
    Caitlyn: { name: "Caitlyn", counterItems: ["3076", "3047", "3143"] },
    Camille: { name: "Camille", counterItems: ["3076", "3047", "3143"] },
    Cassiopeia: { name: "Cassiopeia", counterItems: ["3157", "3111"] },
    ChoGath: { name: "Cho'Gath", counterItems: ["3076", "3047", "3193"] },
    Corki: { name: "Corki", counterItems: ["3157", "3111"] },
    Darius: { name: "Darius", counterItems: ["3076", "3047", "3143"] },
    Diana: { name: "Diana", counterItems: ["3157", "3111"] },
    DrMundo: { name: "DrMundo", counterItems: ["3076", "3047", "3193"] },
    Draven: { name: "Draven", counterItems: ["3076", "3047", "3143"] },
    Ekko: { name: "Ekko", counterItems: ["3157", "1054"] },
    Elise: { name: "Elise", counterItems: ["3157", "3111"] },
    Evelynn: { name: "Evelynn", counterItems: ["3157", "3111"] },
    Ezreal: { name: "Ezreal", counterItems: ["3076", "3047", "3143"] },
    Fiddlesticks: { name: "Fiddlesticks", counterItems: ["3157", "3111"] },
    Fiora: { name: "Fiora", counterItems: ["3076", "3047", "3143"] },
    Fizz: { name: "Fizz", counterItems: ["3157", "3111"] },
    Galio: { name: "Galio", counterItems: ["3193", "3076", "3111"] },
    Gangplank: { name: "Gangplank", counterItems: ["3076", "3047", "3143"] },
    Garen: { name: "Garen", counterItems: ["3076", "3047", "3143"] },
    Gnar: { name: "Gnar", counterItems: ["3076", "3047", "3143"] },
    Gragas: { name: "Gragas", counterItems: ["3193", "3076", "3111"] },
    Graves: { name: "Graves", counterItems: ["3076", "3047", "3143"] },
    Gwen: { name: "Gwen", counterItems: ["3076", "3047", "3193"] },
    Hecarim: { name: "Hecarim", counterItems: ["3193", "3076", "3047"] },
    Heimerdinger: { name: "Heimerdinger", counterItems: ["3157", "3111"] },
    Hwei: { name: "Hwei", counterItems: ["3076", "3047", "3143"] },
    Illaoi: { name: "Illaoi", counterItems: ["3076", "3047", "3143"] },
    Irelia: { name: "Irelia", counterItems: ["3076", "3047", "3143"] },
    Ivern: { name: "Ivern", counterItems: ["3111", "3047", "3009"] },
    Janna: { name: "Janna", counterItems: ["3111", "3047", "3009"] },
    JarvanIV: { name: "Jarvan IV", counterItems: ["3193", "3076", "3047"] },
    Jax: { name: "Jax", counterItems: ["3076", "3047", "3143"] },
    Jayce: { name: "Jayce", counterItems: ["3076", "3047", "3143"] },
    Jhin: { name: "Jhin", counterItems: ["3076", "3047", "3143"] },
    Jinx: { name: "Jinx", counterItems: ["3076", "3047", "3143"] },
    KSante: { name: "K'Sante", counterItems: ["3193", "3076", "3047"] },
    KaiSa: { name: "Kai'Sa", counterItems: ["3076", "3047", "3143"] },
    Kalista: { name: "Kalista", counterItems: ["3076", "3047", "3143"] },
    Karma: { name: "Karma", counterItems: ["3157", "3111"] },
    Karthus: { name: "Karthus", counterItems: ["3157", "3111"] },
    Kassadin: { name: "Kassadin", counterItems: ["3157", "3111"] },
    Katarina: { name: "Katarina", counterItems: ["3157", "3111"] },
    Kayle: { name: "Kayle", counterItems: ["3157", "3111"] },
    Kayn: { name: "Kayn", counterItems: ["3076", "3047", "3143"] },
    Kennen: { name: "Kennen", counterItems: ["3157", "3111"] },
    KhaZix: { name: "Kha'Zix", counterItems: ["3076", "3047", "3143"] },
    Kindred: { name: "Kindred", counterItems: ["3076", "3047", "3143"] },
    Kled: { name: "Kled", counterItems: ["3076", "3047", "3143"] },
    KogMaw: { name: "KogMaw", counterItems: ["3076", "3047", "3143"] },
    LeBlanc: { name: "LeBlanc", counterItems: ["3157", "3111"] },
    LeeSin: { name: "LeeSin", counterItems: ["3076", "3047", "3143"] },
    Leona: { name: "Leona", counterItems: ["3076", "3047", "3143"] },
    Lillia: { name: "Lillia", counterItems: ["3157", "3111"] },
    Lissandra: { name: "Lissandra", counterItems: ["3157", "3111"] },
    Lucian: { name: "Lucian", counterItems: ["3076", "3047", "3143"] },
    Lulu: { name: "Lulu", counterItems: ["3076", "3047", "3143"] },
    Lux: { name: "Lux", counterItems: ["3157", "3111"] },
    Malphite: { name: "Malphite", counterItems: ["3076", "3047", "3143"] },
    Malzahar: { name: "Malzahar", counterItems: ["3157", "3111"] },
    Maokai: { name: "Maokai", counterItems: ["3076", "3047", "3143"] },
    MasterYi: { name: "MasterYi", counterItems: ["3076", "3047", "3143"] },
    Milio: { name: "Milio", counterItems: ["3076", "3047", "3143"] },
    MissFortune: { name: "MissFortune", counterItems: ["3076", "3047", "3143"] },
    Mordekaiser: { name: "Mordekaiser", counterItems: ["3076", "3047", "3143"] },
    Morgana: { name: "Morgana", counterItems: ["3157", "3111"] },
    Naafiri: { name: "Naafiri", counterItems: ["3076", "3047", "3143"] },
    Nami: { name: "Nami", counterItems: ["3111", "3047", "3009"] },
    Nasus: { name: "Nasus", counterItems: ["3076", "3047", "3143"] },
    Nautilus: { name: "Nautilus", counterItems: ["3076", "3047", "3143"] },
    Neeko: { name: "Neeko", counterItems: ["3157", "3111"] },
    Nidalee: { name: "Nidalee", counterItems: ["3076", "3047", "3143"] },
    Nilah: { name: "Nilah", counterItems: ["3076", "3047", "3143"] },
    Nocturne: { name: "Nocturne", counterItems: ["3076", "3047", "3143"] },
    NunuWillump: { name: "NunuWillump", counterItems: ["3076", "3047", "3143"] },
    Olaf: { name: "Olaf", counterItems: ["3076", "3047", "3143"] },
    Orianna: { name: "Orianna", counterItems: ["3157", "3111"] },
    Ornn: { name: "Ornn", counterItems: ["3076", "3047", "3143"] },
    Pantheon: { name: "Pantheon", counterItems: ["3076", "3047", "3143"] },
    Poppy: { name: "Poppy", counterItems: ["3076", "3047", "3143"] },
    Pyke: { name: "Pyke", counterItems: ["3076", "3047", "3143"] },
    Qiyana: { name: "Qiyana", counterItems: ["3076", "3047", "3143"] },
    Quinn: { name: "Quinn", counterItems: ["3076", "3047", "3143"] },
    Rakan: { name: "Rakan", counterItems: ["3111", "3047", "3009"] },
    Rammus: { name: "Rammus", counterItems: ["3076", "3047", "3143"] },
    RekSai: { name: "Rek'Sai", counterItems: ["3076", "3047", "3143"] },
    Rell: { name: "Rell", counterItems: ["3076", "3047", "3143"] },
    RenataGlasc: { name: "RenataGlasc", counterItems: ["3157", "3111"] },
    Renekton: { name: "Renekton", counterItems: ["3076", "3047", "3143"] },
    Rengar: { name: "Rengar", counterItems: ["3076", "3047", "3143"] },
    Riven: { name: "Riven", counterItems: ["3076", "3047", "3143"] },
    Rumble: { name: "Rumble", counterItems: ["3076", "3047", "3143"] },
    Ryze: { name: "Ryze", counterItems: ["3157", "3111"] },
    Samira: { name: "Samira", counterItems: ["3076", "3047", "3143"] },
    Sejuani: { name: "Sejuani", counterItems: ["3076", "3047", "3143"] },
    Senna: { name: "Senna", counterItems: ["3076", "3047", "3143"] },
    Seraphine: { name: "Seraphine", counterItems: ["3157", "3111"] },
    Sett: { name: "Sett", counterItems: ["3076", "3047", "3143"] },
    Shaco: { name: "Shaco", counterItems: ["3076", "3047", "3143"] },
    Shen: { name: "Shen", counterItems: ["3076", "3047", "3143"] },
    Shyvana: { name: "Shyvana", counterItems: ["3076", "3047", "3143"] },
    Singed: { name: "Singed", counterItems: ["3076", "3047", "3143"] },
    Sion: { name: "Sion", counterItems: ["3076", "3047", "3143"] },
    Sivir: { name: "Sivir", counterItems: ["3076", "3047", "3143"] },
    Skarner: { name: "Skarner", counterItems: ["3076", "3047", "3143"] },
    Smolder: { name: "Smolder", counterItems: ["3076", "3047", "3143"] },
    Sona: { name: "Sona", counterItems: ["3157", "3111"] },
    Soraka: { name: "Soraka", counterItems: ["3157", "3111"] },
    Swain: { name: "Swain", counterItems: ["3157", "3111"] },
    Sylas: { name: "Sylas", counterItems: ["3157", "3111"] },
    Syndra: { name: "Syndra", counterItems: ["3157", "3111"] },
    TahmKench: { name: "Tahm Kench", counterItems: ["3076", "3047", "3143"] },
    Taliyah: { name: "Taliyah", counterItems: ["3157", "3111"] },
    Talon: { name: "Talon", counterItems: ["3076", "3047", "3143"] },
    Taric: { name: "Taric", counterItems: ["3157", "3111"] },
    Teemo: { name: "Teemo", counterItems: ["3076", "3047", "3143"] },
    Thresh: { name: "Thresh", counterItems: ["3076", "3047", "3143"] },
    Tristana: { name: "Tristana", counterItems: ["3076", "3047", "3143"] },
    Trundle: { name: "Trundle", counterItems: ["3076", "3047", "3143"] },
    Tryndamere: { name: "Tryndamere", counterItems: ["3076", "3047", "3143"] },
    TwistedFate: { name: "TwistedFate", counterItems: ["3157", "3111"] },
    Twitch: { name: "Twitch", counterItems: ["3076", "3047", "3143"] },
    Udyr: { name: "Udyr", counterItems: ["3076", "3047", "3143"] },
    Urgot: { name: "Urgot", counterItems: ["3076", "3047", "3143"] },
    Varus: { name: "Varus", counterItems: ["3076", "3047", "3143"] },
    Vayne: { name: "Vayne", counterItems: ["3076", "3047", "3143"] },
    Veigar: { name: "Veigar", counterItems: ["3157", "3111"] },
    VelKoz: { name: "Vel'Koz", counterItems: ["3157", "3111"] },
    Vex: { name: "Vex", counterItems: ["3157", "3111"] },
    Vi: { name: "Vi", counterItems: ["3076", "3047", "3143"] },
    Viego: { name: "Viego", counterItems: ["3076", "3047", "3143"] },
    Viktor: { name: "Viktor", counterItems: ["3157", "3111"] },
    Vladimir: { name: "Vladimir", counterItems: ["3157", "3111"] },
    Volibear: { name: "Volibear", counterItems: ["3076", "3047", "3143"] },
    Warwick: { name: "Warwick", counterItems: ["3076", "3047", "3143"] },
    Wukong: { name: "Wukong", counterItems: ["3076", "3047", "3143"] },
    Xayah: { name: "Xayah", counterItems: ["3076", "3047", "3143"] },
    Xerath: { name: "Xerath", counterItems: ["3157", "3111"] },
    XinZhao: { name: "XinZhao", counterItems: ["3076", "3047", "3143"] },
    Yasuo: { name: "Yasuo", counterItems: ["3076", "3047", "3143"] },
    Yone: { name: "Yone", counterItems: ["3076", "3047", "3143"] },
    Yorick: { name: "Yorick", counterItems: ["3076", "3047", "3143"] },
    Yuumi: { name: "Yuumi", counterItems: ["3076", "3047", "3143"] },
    Zac: { name: "Zac", counterItems: ["3076", "3047", "3143"] },
    Zed: { name: "Zed", counterItems: ["3076", "3047", "3143"] },
    Zeri: { name: "Zeri", counterItems: ["3076", "3047", "3143"] },
    Ziggs: { name: "Ziggs", counterItems: ["3157", "3111"] },
    Zilean: { name: "Zilean", counterItems: ["3157", "3111"] },
    Zoe: { name: "Zoe", counterItems: ["3157", "3111"] },
    Zyra: { name: "Zyra", counterItems: ["3157", "3111"] }
};


export const fetchChampionData = async (championName) => {
    const champion = championData[championName];
    if (champion) {
        return {
            name: champion.name,
            counterItems: champion.counterItems.map(
                (itemId) =>
                    `https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/${itemId}.png`
            ),
        };
    } else {
        return {
            name: "Unknown",
            counterItems: [],
        };
    }
};

export const getChampionList = () => Object.keys(championData);
