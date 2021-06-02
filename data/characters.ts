export interface Character {
    id: string;
    name: string;
    rarity: 4 | 5;
    constellation: string;
    description: string;
    element: Vision;
    weapon: Weapon;
    sub: string;
    ascension: string;
    local: string;
    common: string;
    weekly: string;
    book: string;
}

export type Vision = "cryo" | "pyro" | "geo" | "electro" | "anemo" | "hydro";

export type Weapon = "bow" | "catalyst" | "claymore" | "polearm" | "sword";

export interface Characters {
    [id: string]: Character;
}

export const characters: Characters = {
    eula: {
        id: "eula",
        name: "Eula",
        rarity: 5,
        constellation: "Aphros Delos",
        description:
            "The Spindrift Knight, a scion of the old aristocracy, and the Captain of the Knights of Favonius Reconnaissance Company. The reason for which a descendant of the ancient nobles might join the Knights remains a great mystery in Mondstadt to this very day.",
        element: "cryo",
        weapon: "claymore",
        sub: "CRIT DMG",
        ascension: "Crystalline Bloom",
        local: "Dandelion Seed",
        common: "mask",
        weekly: "Dragon Lord's Crown",
        book: "resistance",
    },
    yanfei: {
        id: "yanfei",
        name: "Yanfei",
        rarity: 4,
        constellation: "Bestia Iustitia",
        description:
            "A well-known legal adviser active in Liyue Harbor. A brilliant young lady in whose veins runs the blood of an illuminated beast.",
        element: "pyro",
        weapon: "catalyst",
        sub: "Pyro DMG Bonus",
        ascension: "Juvenile Jade",
        local: "Noctilucous Jade",
        common: "treasure_hoarder_insignia",
        weekly: "Bloodjade Branch",
        book: "gold",
    },
    rosaria: {
        id: "rosaria",
        name: "Rosaria",
        rarity: 4,
        constellation: "Spinea Corona",
        description:
            "A sister of the church, though you wouldn't know it if it weren't for her attire. Known for her sharp, cold words and manner, she often works alone.",
        element: "cryo",
        weapon: "polearm",
        sub: "ATK",
        ascension: "Hoarfrost Core",
        local: "Valberry",
        common: "fatui_insignia",
        weekly: "Shadow of the Warrior",
        book: "ballad",
    },
    hu_tao: {
        id: "hu_tao",
        name: "Hu Tao",
        rarity: 5,
        constellation: "Papilio Charontis",
        description:
            "The 77th Director of the Wangsheng Funeral Parlor. She took over the business at a rather young age.",
        element: "pyro",
        weapon: "polearm",
        sub: "CRIT DMG",
        ascension: "Juvenile Jade",
        local: "Silk Flower",
        common: "nectar",
        weekly: "Shard of a Foul Legacy",
        book: "diligence",
    },
    xiao: {
        id: "xiao",
        name: "Xiao",
        rarity: 5,
        constellation: "Alatus Nemeseos",
        description:
            'A yaksha adeptus who defends Liyue. Also heralded as the "Conqueror of Demons" and "Vigilant Yaksha."',
        element: "anemo",
        weapon: "polearm",
        sub: "CRIT Rate",
        ascension: "Juvenile Jade",
        local: "Qingxin",
        common: "slime",
        weekly: "Shadow of the Warrior",
        book: "prosperity",
    },
    ganyu: {
        id: "ganyu",
        name: "Ganyu",
        rarity: 5,
        constellation: "Sinae Unicornis",
        description:
            "The secretary at Yuehai Pavilion. The blood of the qilin, an illuminated beast, flows within her veins.",
        element: "cryo",
        weapon: "bow",
        sub: "CRIT DMG",
        ascension: "Hoarfrost Core",
        local: "Qingxin",
        common: "nectar",
        weekly: "Shadow of the Warrior",
        book: "diligence",
    },
    albedo: {
        id: "albedo",
        name: "Albedo",
        rarity: 5,
        constellation: "Princeps Cretaceus",
        description:
            "A genius known as the Kreideprinz, he is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius.",
        element: "geo",
        weapon: "sword",
        sub: "Geo DMG Bonus",
        ascension: "Basalt Pillar",
        local: "Cecilia",
        common: "scroll",
        weekly: "Tusk of Monoceros Caeli",
        book: "ballad",
    },
    zhongli: {
        id: "zhongli",
        name: "Zhongli",
        rarity: 5,
        constellation: "Lapis Dei",
        description:
            "A mysterious expert contracted by the Wangsheng Funeral Parlor. Extremely knowledgeable in all things.",
        element: "geo",
        weapon: "polearm",
        sub: "Geo DMG Bonus",
        ascension: "Basalt Pillar",
        local: "Cor Lapis",
        common: "slime",
        weekly: "Tusk of Monoceros Caeli",
        book: "gold",
    },
    xinyan: {
        id: "xinyan",
        name: "Xinyan",
        rarity: 4,
        constellation: "Fila Ignium",
        description:
            "Liyue's sole rock 'n' roll musician. She rebels against ossified prejudices using her music and passionate singing.",
        element: "pyro",
        weapon: "claymore",
        sub: "ATK",
        ascension: "Everflame Seed",
        local: "Violetgrass",
        common: "treasure_hoarder_insignia",
        weekly: "Tusk of Monoceros Caeli ",
        book: "gold",
    },
    tartaglia: {
        id: "tartaglia",
        name: "Tartaglia",
        rarity: 5,
        constellation: "Monoceros Caeli",
        description:
            'No. 11 of The Harbingers, also known as "Childe." His name is highly feared on the battlefield.',
        element: "hydro",
        weapon: "bow",
        sub: "Hydro DMG Bonus",
        ascension: "Cleansing Heart",
        local: "Starconch",
        common: "fatui_insignia",
        weekly: "Shard of a Foul Legacy ",
        book: "freedom",
    },
    diona: {
        id: "diona",
        name: "Diona",
        rarity: 4,
        constellation: "Feles",
        description:
            "A young lady who has inherited trace amounts of non-human blood. She is the incredibly popular bartender of the Cat's Tail tavern.",
        element: "cryo",
        weapon: "bow",
        sub: "Cryo DMG Bonus",
        ascension: "Hoarfrost Core",
        local: "Calla Lily",
        common: "arrowhead",
        weekly: "Shard of a Foul Legacy",
        book: "freedom",
    },
    klee: {
        id: "klee",
        name: "Klee",
        rarity: 5,
        constellation: "Trifolium",
        description:
            "An explosives expert and a regular at the Knights of Favonius's confinement room. Also known as Fleeing Sunlight.",
        element: "pyro",
        weapon: "catalyst",
        sub: "Pyro DMG Bonus",
        ascension: "Everflame Seed",
        local: "Philanemo Mushroom",
        common: "scroll",
        weekly: "Ring of Boreas",
        book: "freedom",
    },
    venti: {
        id: "venti",
        name: "Venti",
        rarity: 5,
        constellation: "Carmen Dei",
        description:
            "One of the many bards of Mondstadt, who freely wanders the city's streets and alleys.",
        element: "anemo",
        weapon: "bow",
        sub: "Energy Recharge",
        ascension: "Hurricane Seed",
        local: "Cecilia",
        common: "slime",
        weekly: "Tail of Boreas",
        book: "ballad",
    },
    keqing: {
        id: "keqing",
        name: "Keqing",
        rarity: 5,
        constellation: "Trulla Cementarii",
        description:
            "The Yuheng of the Liyue Qixing. Keqing has much to say about Rex Lapis's unilateral approach to policymaking in Liyue — but in truth, gods admire skeptics such as her quite a lot.",
        element: "electro",
        weapon: "sword",
        sub: "CRIT DMG",
        ascension: "Lightning Prism",
        local: "Cor Lapis",
        common: "nectar",
        weekly: "Ring of Boreas",
        book: "prosperity",
    },
    mona: {
        id: "mona",
        name: "Mona",
        rarity: 5,
        constellation: "Astrolabos",
        description:
            'A mysterious young astrologer who proclaims herself to be "Astrologist Mona Megistus," and who possesses abilities to match the title. Erudite, but prideful.',
        element: "hydro",
        weapon: "catalyst",
        sub: "Energy Recharge",
        ascension: "Cleansing Heart",
        local: "Philanemo Mushroom",
        common: "nectar",
        weekly: "Ring of Boreas",
        book: "resistance",
    },
    qiqi: {
        id: "qiqi",
        name: "Qiqi",
        rarity: 5,
        constellation: "Pristina Nola",
        description:
            "An apprentice and herb gatherer at Bubu Pharmacy. An undead with a bone-white complexion, she seldom has much in the way of words or emotion.",
        element: "cryo",
        weapon: "sword",
        sub: "Healing Bonus",
        ascension: "Hoarfrost Core",
        local: "Violetgrass",
        common: "scroll",
        weekly: "Tail of Boreas",
        book: "prosperity",
    },
    diluc: {
        id: "diluc",
        name: "Diluc",
        rarity: 5,
        constellation: "Noctua",
        description:
            "The tycoon of a winery empire in Mondstadt, unmatched in every possible way.",
        element: "pyro",
        weapon: "claymore",
        sub: "CRIT Rate",
        ascension: "Everflame Seed",
        local: "Small Lamp Grass",
        common: "fatui_insignia",
        weekly: "Dvalin's Plume",
        book: "resistance",
    },
    jean: {
        id: "jean",
        name: "Jean",
        rarity: 5,
        constellation: "Leo Minor",
        description:
            "The righteous and rigorous Dandelion Knight, and Acting Grand Master of Mondstadt's Knights of Favonius.",
        element: "anemo",
        weapon: "sword",
        sub: "Healing Bonus",
        ascension: "Hurricane Seed",
        local: "Dandelion Seed",
        common: "mask",
        weekly: "Dvalin's Plume",
        book: "resistance",
    },
    sucrose: {
        id: "sucrose",
        name: "Sucrose",
        rarity: 4,
        constellation: "Ampulla",
        description:
            "An alchemist filled with curiosity about all things. She researches bio-alchemy.",
        element: "anemo",
        weapon: "catalyst",
        sub: "Anemo DMG Bonus",
        ascension: "Hurricane Seed",
        local: "Windwheel Aster",
        common: "nectar",
        weekly: "Spirit Locket of Boreas",
        book: "freedom",
    },
    chongyun: {
        id: "chongyun",
        name: "Chongyun",
        rarity: 4,
        constellation: "Nubis Caesor",
        description:
            "A young exorcist from a family of exorcists. He does everything he can to suppress his abundance of yang energy.",
        element: "cryo",
        weapon: "claymore",
        sub: "ATK",
        ascension: "Hoarfrost Core",
        local: "Cor Lapis",
        common: "mask",
        weekly: "Dvalin's Sigh",
        book: "diligence",
    },
    noelle: {
        id: "noelle",
        name: "Noelle",
        rarity: 4,
        constellation: "Parma Cordis",
        description:
            "A maid who faithfully serves the Knights of Favonius. She dreams of joining their ranks someday.",
        element: "geo",
        weapon: "claymore",
        sub: "DEF",
        ascension: "Basalt Pillar",
        local: "Valberry",
        common: "mask",
        weekly: "Dvalin's Claw",
        book: "resistance",
    },
    bennett: {
        id: "bennett",
        name: "Bennett",
        rarity: 4,
        constellation: "Rota Calamitas",
        description:
            "A good-natured adventurer from Mondstadt who's unfortunately extremely unlucky.",
        element: "pyro",
        weapon: "sword",
        sub: "Energy Recharge",
        ascension: "Everflame Seed",
        local: "Windwheel Aster",
        common: "treasure_hoarder_insignia",
        weekly: "Dvalin's Plume",
        book: "resistance",
    },
    fischl: {
        id: "fischl",
        name: "Fischl",
        rarity: 4,
        constellation: "Corvus",
        description:
            'A mysterious girl who calls herself "Prinzessin der Verurteilung" and travels with a night raven named Oz.',
        element: "electro",
        weapon: "bow",
        sub: "ATK",
        ascension: "Lightning Prism",
        local: "Small Lamp Grass",
        common: "arrowhead",
        weekly: "Spirit Locket of Boreas",
        book: "ballad",
    },
    ningguang: {
        id: "ningguang",
        name: "Ningguang",
        rarity: 4,
        constellation: "Opus Aequilibrium",
        description:
            "The Tianquan of the Liyue Qixing. Her wealth is unsurpassed in all of Teyvat.",
        element: "geo",
        weapon: "catalyst",
        sub: "Geo DMG Bonus",
        ascension: "Basalt Pillar",
        local: "Glaze Lily",
        common: "fatui_insignia",
        weekly: "Spirit Locket of Boreas",
        book: "prosperity",
    },
    xingqiu: {
        id: "xingqiu",
        name: "Xingqiu",
        rarity: 4,
        constellation: "Fabulae Textile",
        description:
            "A young man carrying a longsword who is frequently seen at book booths. He has a chivalrous heart and yearns for justice and fairness for all.",
        element: "hydro",
        weapon: "sword",
        sub: "ATK",
        ascension: "Cleansing Heart",
        local: "Silk Flower",
        common: "mask",
        weekly: "Tail of Boreas",
        book: "gold",
    },
    beidou: {
        id: "beidou",
        name: "Beidou",
        rarity: 4,
        constellation: "Victor Mare",
        description:
            "Captain of her crew, The Crux. She's quite an unbound and forthright woman.",
        element: "electro",
        weapon: "claymore",
        sub: "Electro DMG Bonus",
        ascension: "Lightning Prism",
        local: "Noctilucous Jade",
        common: "treasure_hoarder_insignia",
        weekly: "Dvalin's Sigh",
        book: "gold",
    },
    xiangling: {
        id: "xiangling",
        name: "Xiangling",
        rarity: 4,
        constellation: "Trulla",
        description:
            "A renowned chef from Liyue. She's extremely passionate about cooking and excels at making her signature hot and spicy dishes.",
        element: "pyro",
        weapon: "polearm",
        sub: "Elemental Mastery",
        ascension: "Everflame Seed",
        local: "Jueyun Chili",
        common: "slime",
        weekly: "Dvalin's Claw",
        book: "diligence",
    },
    razor: {
        id: "razor",
        name: "Razor",
        rarity: 4,
        constellation: "Lupus Minor",
        description:
            "A boy who lives among the wolves in Wolvendom of Mondstadt, away from human civilization. As agile as lightning.",
        element: "electro",
        weapon: "claymore",
        sub: "Physical DMG Bonus",
        ascension: "Lightning Prism",
        local: "Wolfhook",
        common: "mask",
        weekly: "Dvalin's Claw",
        book: "resistance",
    },
    barbara: {
        id: "barbara",
        name: "Barbara",
        rarity: 4,
        constellation: "Crater",
        description:
            'Every citizen of Mondstadt adores Barbara. She learned the word "idol" from a magazine.',
        element: "hydro",
        weapon: "catalyst",
        sub: "HP",
        ascension: "Cleansing Heart",
        local: "Philanemo Mushroom",
        common: "scroll",
        weekly: "Ring of Boreas",
        book: "freedom",
    },
    lisa: {
        id: "lisa",
        name: "Lisa",
        rarity: 4,
        constellation: "Tempus Fugit",
        description:
            "The languid but knowledgeable Librarian of the Knights of Favonius, deemed by Sumeru Academia to be their most distinguished graduate in the past two centuries.",
        element: "electro",
        weapon: "catalyst",
        sub: "Elemental Mastery",
        ascension: "Lightning Prism",
        local: "Valberry",
        common: "slime",
        weekly: "Dvalin's Claw",
        book: "ballad",
    },
    kaeya: {
        id: "kaeya",
        name: "Kaeya",
        rarity: 4,
        constellation: "Pavo Ocellus",
        description:
            "An accomplished swordsman and a strategic thinker in the Knights of Favonius, rumored to hail from beyond Mondstadt.",
        element: "cryo",
        weapon: "sword",
        sub: "Energy Recharge",
        ascension: "Hoarfrost Core",
        local: "Calla Lily",
        common: "treasure_hoarder_insignia",
        weekly: "Spirit Locket of Boreas",
        book: "ballad",
    },
    amber: {
        id: "amber",
        name: "Amber",
        rarity: 4,
        constellation: "Lepus",
        description:
            "Always energetic and full of life, Amber's the best — albeit only — Outrider of the Knights of Favonius.",
        element: "pyro",
        weapon: "bow",
        sub: "ATK",
        ascension: "Everflame Seed",
        local: "Small Lamp Grass",
        common: "arrowhead",
        weekly: "Dvalin's Sigh",
        book: "freedom",
    },
};
