import _ from "lodash";
import { ascensionCosts } from "../data/ascensionCost";
import {
    BuildItem,
    Character,
    Item,
    ItemGroup,
    LevelConfig,
    PricedMaterials,
} from "./MyTypes";

export interface MaterialList {
    mora: number;
    xp: number;
    // level:
}

export function getCharacterMaterials(character: Character, _lvlCfg: LevelConfig) {
    // sanitize lvlCfg
    // get all leveling materials
    // get all ascension materials
    // get all talent materials

    // return object:
    // total mora
    // xp needed
    // leveling: {accXp, mora}
    // ascension: {mora, materials}
    // normal: {mora, materials}
    // elemental: {mora, materials}
    // burst: {mora, materials}
    // all talent materials
    // all materials (ascension and talents)

    const totalMora = 0;
    const materialTable = character.materials();
}

export interface CharacterMaterialsArgs {
    boss?: string;
    local: string;
    weekly: string;
    common: ItemGroup;
    book: ItemGroup;
    gem: ItemGroup;
}

export interface CharacterMaterials {
    ascension: PricedMaterials[];
    normal: PricedMaterials[];
    elemental: PricedMaterials[];
    burst: PricedMaterials[];
}

export function standard(list: CharacterMaterialsArgs): CharacterMaterials {
    return {
        ascension: ascensionCosts(list.gem, list.local, list.common, list.boss),
        normal: [],
        elemental: [],
        burst: [],
    };
}
