import { standard } from "../lib/characterMaterials";
import { Characters, ItemGroup } from "../lib/MyTypes";
import { items } from "./items";

export const characters: Characters = {
    kazuha: {
        id: "kazuha",
        name: "Kazuha",
        rarity: 5,
        constellation: "Acer Palmatum",
        description:
            "A wandering samurai from Inazuma who is currently with Liyue's Crux Fleet. A gentle and carefree soul whose heart hides a great many burdens from the past. It's hard to say if weathering life's storms has eroded any sharp edges he once had or his reserved nature keeps them hidden from view. The first time most people meet Kaedehara Kazuha, they presume he is just another traineee crew member aboard The Crux.",
        element: "anemo",
        weapon: "sword",
        sub: "Elemental Mastery",
        materials: () =>
            standard({
                ascension: items.marionette_core.name,
                local: items.sea_ganoderma.name,
                weekly: items.gilded_scale.name,
                common: ItemGroup.treasure_hoarder_insignia,
                book: ItemGroup.diligence,
                gem: ItemGroup.anemo_gem,
            }),
    },
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
        materials: () =>
            standard({
                ascension: "Crystalline Bloom",
                local: "Dandelion Seed",
                common: ItemGroup.mask,
                weekly: "Dragon Lord's Crown",
                book: ItemGroup.resistance,
                gem: ItemGroup.cryo_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Juvenile Jade",
                local: "Noctilucous Jade",
                common: ItemGroup.treasure_hoarder_insignia,
                weekly: "Bloodjade Branch",
                book: ItemGroup.gold,
                gem: ItemGroup.pyro_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Hoarfrost Core",
                local: "Valberry",
                common: ItemGroup.fatui_insignia,
                weekly: "Shadow of the Warrior",
                book: ItemGroup.ballad,
                gem: ItemGroup.cryo_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Juvenile Jade",
                local: "Silk Flower",
                common: ItemGroup.nectar,
                weekly: "Shard of a Foul Legacy",
                book: ItemGroup.diligence,
                gem: ItemGroup.pyro_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Juvenile Jade",
                local: "Qingxin",
                common: ItemGroup.slime,
                weekly: "Shadow of the Warrior",
                book: ItemGroup.prosperity,
                gem: ItemGroup.anemo_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Hoarfrost Core",
                local: "Qingxin",
                common: ItemGroup.nectar,
                weekly: "Shadow of the Warrior",
                book: ItemGroup.diligence,
                gem: ItemGroup.cryo_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Basalt Pillar",
                local: "Cecilia",
                common: ItemGroup.scroll,
                weekly: "Tusk of Monoceros Caeli",
                book: ItemGroup.ballad,
                gem: ItemGroup.geo_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Basalt Pillar",
                local: "Cor Lapis",
                common: ItemGroup.slime,
                weekly: "Tusk of Monoceros Caeli",
                book: ItemGroup.gold,
                gem: ItemGroup.geo_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Everflame Seed",
                local: "Violetgrass",
                common: ItemGroup.treasure_hoarder_insignia,
                weekly: "Tusk of Monoceros Caeli",
                book: ItemGroup.gold,
                gem: ItemGroup.pyro_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Cleansing Heart",
                local: "Starconch",
                common: ItemGroup.fatui_insignia,
                weekly: "Shard of a Foul Legacy",
                book: ItemGroup.freedom,
                gem: ItemGroup.hydro_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Hoarfrost Core",
                local: "Calla Lily",
                common: ItemGroup.arrowhead,
                weekly: "Shard of a Foul Legacy",
                book: ItemGroup.freedom,
                gem: ItemGroup.cryo_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Everflame Seed",
                local: "Philanemo Mushroom",
                common: ItemGroup.scroll,
                weekly: "Ring of Boreas",
                book: ItemGroup.freedom,
                gem: ItemGroup.pyro_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Hurricane Seed",
                local: "Cecilia",
                common: ItemGroup.slime,
                weekly: "Tail of Boreas",
                book: ItemGroup.ballad,
                gem: ItemGroup.anemo_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Lightning Prism",
                local: "Cor Lapis",
                common: ItemGroup.nectar,
                weekly: "Ring of Boreas",
                book: ItemGroup.prosperity,
                gem: ItemGroup.electro_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Cleansing Heart",
                local: "Philanemo Mushroom",
                common: ItemGroup.nectar,
                weekly: "Ring of Boreas",
                book: ItemGroup.resistance,
                gem: ItemGroup.hydro_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Hoarfrost Core",
                local: "Violetgrass",
                common: ItemGroup.scroll,
                weekly: "Tail of Boreas",
                book: ItemGroup.prosperity,
                gem: ItemGroup.cryo_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Everflame Seed",
                local: "Small Lamp Grass",
                common: ItemGroup.fatui_insignia,
                weekly: "Dvalin's Plume",
                book: ItemGroup.resistance,
                gem: ItemGroup.pyro_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Hurricane Seed",
                local: "Dandelion Seed",
                common: ItemGroup.mask,
                weekly: "Dvalin's Plume",
                book: ItemGroup.resistance,
                gem: ItemGroup.anemo_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Hurricane Seed",
                local: "Windwheel Aster",
                common: ItemGroup.nectar,
                weekly: "Spirit Locket of Boreas",
                book: ItemGroup.freedom,
                gem: ItemGroup.anemo_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Hoarfrost Core",
                local: "Cor Lapis",
                common: ItemGroup.mask,
                weekly: "Dvalin's Sigh",
                book: ItemGroup.diligence,
                gem: ItemGroup.cryo_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Basalt Pillar",
                local: "Valberry",
                common: ItemGroup.mask,
                weekly: "Dvalin's Claw",
                book: ItemGroup.resistance,
                gem: ItemGroup.geo_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Everflame Seed",
                local: "Windwheel Aster",
                common: ItemGroup.treasure_hoarder_insignia,
                weekly: "Dvalin's Plume",
                book: ItemGroup.resistance,
                gem: ItemGroup.pyro_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Lightning Prism",
                local: "Small Lamp Grass",
                common: ItemGroup.arrowhead,
                weekly: "Spirit Locket of Boreas",
                book: ItemGroup.ballad,
                gem: ItemGroup.electro_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Basalt Pillar",
                local: "Glaze Lily",
                common: ItemGroup.fatui_insignia,
                weekly: "Spirit Locket of Boreas",
                book: ItemGroup.prosperity,
                gem: ItemGroup.geo_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Cleansing Heart",
                local: "Silk Flower",
                common: ItemGroup.mask,
                weekly: "Tail of Boreas",
                book: ItemGroup.gold,
                gem: ItemGroup.hydro_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Lightning Prism",
                local: "Noctilucous Jade",
                common: ItemGroup.treasure_hoarder_insignia,
                weekly: "Dvalin's Sigh",
                book: ItemGroup.gold,
                gem: ItemGroup.electro_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Everflame Seed",
                local: "Jueyun Chili",
                common: ItemGroup.slime,
                weekly: "Dvalin's Claw",
                book: ItemGroup.diligence,
                gem: ItemGroup.pyro_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Lightning Prism",
                local: "Wolfhook",
                common: ItemGroup.mask,
                weekly: "Dvalin's Claw",
                book: ItemGroup.resistance,
                gem: ItemGroup.electro_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Cleansing Heart",
                local: "Philanemo Mushroom",
                common: ItemGroup.scroll,
                weekly: "Ring of Boreas",
                book: ItemGroup.freedom,
                gem: ItemGroup.hydro_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Lightning Prism",
                local: "Valberry",
                common: ItemGroup.slime,
                weekly: "Dvalin's Claw",
                book: ItemGroup.ballad,
                gem: ItemGroup.electro_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Hoarfrost Core",
                local: "Calla Lily",
                common: ItemGroup.treasure_hoarder_insignia,
                weekly: "Spirit Locket of Boreas",
                book: ItemGroup.ballad,
                gem: ItemGroup.cryo_gem,
            }),
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
        materials: () =>
            standard({
                ascension: "Everflame Seed",
                local: "Small Lamp Grass",
                common: ItemGroup.arrowhead,
                weekly: "Dvalin's Sigh",
                book: ItemGroup.freedom,
                gem: ItemGroup.pyro_gem,
            }),
    },
};
