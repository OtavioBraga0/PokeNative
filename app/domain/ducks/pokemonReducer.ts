import {
  createReducer,
  createAction,
  PayloadAction,
  Reducer,
} from '@reduxjs/toolkit';
import {PayloadActionCreator} from '@reduxjs/toolkit/src/createAction';
import {EngageState} from '../DomainLayer';
import {Pokemon, PokemonSpecieType} from '../entities/pokemon';
import {
  getPokemonSpecieDetailThunk,
  getPokemonsThunk,
  getPokemonTypeDetailThunk,
} from '../thunks/pokemonThunk';

export type PokemonActionsType =
  | PayloadAction<Pokemon>
  | PayloadAction<null>
  | PayloadAction<boolean>;

export interface PokemonState {
  pokemons: Pokemon[];
  detailedPokemon: Pokemon | null;
  isLoading: boolean;
}

export const POKEMON_INITIAL_STATE: PokemonState = {
  pokemons: [],
  detailedPokemon: null,
  isLoading: false,
};

export const pokemonSelector = (state: EngageState): PokemonState =>
  state.pokemon;

export const isLoading: PayloadActionCreator<PokemonState> = createAction(
  'duck/pokemon/isLoading',
);

export const selectPokemon: PayloadActionCreator<Pokemon> = createAction(
  'duck/pokemon/selectPokemon',
);

export const getPokemonSpecieDetails: PayloadActionCreator<PokemonSpecieType> =
  createAction('duck/pokemon/getPokemonSpecieDetails');

function handleGetDetailedPokemons(
  state: PokemonState,
  action: PayloadAction<Pokemon[]>,
): PokemonState {
  return {
    ...state,
    pokemons: action.payload,
    isLoading: false,
  };
}

function handleSelectPokemon(
  state: PokemonState,
  action: PayloadAction<Pokemon>,
): PokemonState {
  return {
    ...state,
    detailedPokemon: action.payload,
    isLoading: false,
  };
}

function handleGetPokemonSpecieDetails(
  state: PokemonState,
  action: PayloadAction<PokemonSpecieType>,
): PokemonState {
  return {
    ...state,
    detailedPokemon: {
      ...(state.detailedPokemon as Pokemon),
      pokemon_specie: action.payload,
    },
    isLoading: false,
  };
}

function handleGetPokemonTypeDetail(
  state: PokemonState,
  action: PayloadAction<string[]>,
): PokemonState {
  return {
    ...state,
    detailedPokemon: {
      ...(state.detailedPokemon as Pokemon),
      weaknesses: action.payload,
    },
    isLoading: false,
  };
}

function handlePending(state: PokemonState): PokemonState {
  return {
    ...state,
    isLoading: true,
  };
}

function handleRejected(state: PokemonState): PokemonState {
  return {
    ...state,
    isLoading: false,
  };
}

const builderReducer = (builder: any) =>
  builder
    .addCase(getPokemonsThunk.pending.type, handlePending)
    .addCase(getPokemonsThunk.rejected.type, handleRejected)
    .addCase(getPokemonsThunk.fulfilled.type, handleGetDetailedPokemons)

    .addCase(getPokemonSpecieDetailThunk.pending.type, handlePending)
    .addCase(getPokemonSpecieDetailThunk.rejected.type, handleRejected)
    .addCase(
      getPokemonSpecieDetailThunk.fulfilled.type,
      handleGetPokemonSpecieDetails,
    )

    .addCase(getPokemonTypeDetailThunk.pending.type, handlePending)
    .addCase(getPokemonTypeDetailThunk.rejected.type, handleRejected)
    .addCase(
      getPokemonTypeDetailThunk.fulfilled.type,
      handleGetPokemonTypeDetail,
    )

    .addCase(selectPokemon.type, handleSelectPokemon);

export const pokemonReducer: Reducer<PokemonState, PokemonActionsType> =
  createReducer(POKEMON_INITIAL_STATE, builderReducer);
