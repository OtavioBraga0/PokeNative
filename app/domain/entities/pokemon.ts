export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: DefaultPokemonType[];
  game_indices: GameIndice[];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: [];
  species: DefaultPokemonType;
  sprites: Sprite;
  stats: Stat[];
  types: Type[];
  weight: number;
  pokemon_specie: PokemonSpecieType;
  weaknesses: string[];
}

export interface DefaultPokemonType {
  name: string;
  url: string;
}

export interface Ability {
  ability: DefaultPokemonType;
  is_hidden: boolean;
  slot: number;
}

export interface GameIndice {
  game_index: number;
  version: DefaultPokemonType;
}

export interface Move {
  move: DefaultPokemonType;
  version_group_details: VersionGroup[];
}

export interface VersionGroup {
  level_learned_at: number;
  move_learn_method: DefaultPokemonType;
  version_group: DefaultPokemonType;
}

export interface Sprite {
  back_default: string;
  back_female?: string;
  back_shiny: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
  other: {
    [key: string]: {
      front_default: string;
      front_female?: string;
    };
  };
  versions: {
    [key: string]: {
      [key: string]: {
        back_default?: string;
        back_gray?: string;
        front_default: string;
        front_gray?: string;
        front_female?: string;
      };
    };
  };
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: DefaultPokemonType;
}

export interface Type {
  slot: number;
  type: DefaultPokemonType;
}

type FlavorType = {
  flavor_text: string;
  language: DefaultPokemonType;
  version: DefaultPokemonType;
};

type GeneraType = {
  genus: string;
  language: DefaultPokemonType;
};

type NamesType = {
  language: DefaultPokemonType;
  name: string;
};

type PalParkEncountersType = {
  area: DefaultPokemonType;
  base_score: number;
  rate: number;
};

type PokedexNumbersType = {
  entry_numbers: number;
  pokedex: DefaultPokemonType;
};

type VarietiesType = {
  is_default: boolean;
  pokemon: DefaultPokemonType;
};

export interface PokemonSpecieType {
  base_happiness: number;
  capture_rate: number;
  color: DefaultPokemonType;
  egg_groups: DefaultPokemonType[];
  evolution_chain: {
    url: string;
  };
  evolves_from_species: null;
  flavor_text_entries: FlavorType[];
  form_descriptions: [];
  forms_switchable: boolean;
  gender_rate: number;
  genera: GeneraType[];
  generation: DefaultPokemonType;
  growth_rate: DefaultPokemonType;
  habitat: DefaultPokemonType;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: NamesType[];
  order: number;
  pal_park_encounters: PalParkEncountersType[];
  pokedex_numbers: PokedexNumbersType;
  shape: DefaultPokemonType;
  varieties: VarietiesType[];
}

export interface PokemonTypeDetail {
  damage_relations: {
    double_damage_from: DefaultPokemonType[];
    double_damage_to: DefaultPokemonType[];
    half_damage_from: DefaultPokemonType[];
    half_damage_to: DefaultPokemonType[];
    no_damage_from: DefaultPokemonType[];
    no_damage_to: DefaultPokemonType[];
  };
  game_indices: GameIndice[];
  generation: DefaultPokemonType;
  id: 12;
  move_damage_class: DefaultPokemonType;
  moves: DefaultPokemonType[];
  name: string;
  names: DefaultPokemonType[];
  past_damage_relations: DefaultPokemonType[];
  pokemon: DefaultPokemonType[];
}
