import {Dispatch} from 'redux';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {EngageState} from '../DomainLayer';
import {Pokemon, PokemonSpecieType, Type} from '../entities/pokemon';
import {
  getDetailedPokemon,
  getPokemons,
  getPokemonSpecieDetail,
  getPokemonTypeDetail,
} from '../../data/services/pokemon';
import {AxiosResponse} from 'axios';

export interface ThunkApi {
  dispatch: Dispatch;
  state: EngageState;
  rejectValue: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

const getPokemonDetails = (
  pokemon: Pokemon,
): Promise<AxiosResponse<Pokemon>> => {
  return getDetailedPokemon(pokemon.name);
};

export const getPokemonsThunk = createAsyncThunk<Pokemon[], void, ThunkApi>(
  'thunk/pokemon/getPokemonThunk',
  async (_, thunkAPI) => {
    try {
      const {generation} = thunkAPI.getState().filter;

      const listPokemons = await getPokemons(generation);

      const detailedPokemons = listPokemons.map(pokemon =>
        getPokemonDetails(pokemon),
      );

      const pokemons: Pokemon[] = await Promise.all(
        detailedPokemons.map(result => result.catch(e => e)),
      ).then(results => results.map(result => result.data));

      return pokemons;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getPokemonSpecieDetailThunk = createAsyncThunk<
  PokemonSpecieType,
  string,
  ThunkApi
>('thunk/pokemon/getPokemonSpecieDetailThunk', async (name, thunkAPI) => {
  try {
    const pokemonSpecie = (await getPokemonSpecieDetail(name)).data;
    return pokemonSpecie;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getPokemonTypeDetailThunk = createAsyncThunk<
  string[],
  Type[],
  ThunkApi
>('thunk/pokemon/getPokemonTypeDetailThunk', async (types, thunkAPI) => {
  try {
    const weaknessList = types.map(async type => {
      const weaknesses = (await getPokemonTypeDetail(type.type.name)).data
        .damage_relations.double_damage_from;

      return weaknesses.map(weakness => weakness.name);
    });
    return (await Promise.all(weaknessList)).flat();
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
