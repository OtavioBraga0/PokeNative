import axios, {AxiosResponse} from 'axios';
import {
  Pokemon,
  PokemonSpecieType,
  PokemonTypeDetail,
} from '../../domain/entities/pokemon';

export async function getPokemons(generation: string): Promise<Pokemon[]> {
  const resp = await axios.get(`generation/generation-${generation}`);

  return resp.data.pokemon_species;
}

export function getDetailedPokemon(
  name: string,
): Promise<AxiosResponse<Pokemon>> {
  return axios.get(`pokemon/${name}`);
}

export function getPokemonSpecieDetail(
  name: string,
): Promise<AxiosResponse<PokemonSpecieType>> {
  return axios.get(`pokemon-species/${name}`);
}

export function getPokemonTypeDetail(
  type: string,
): Promise<AxiosResponse<PokemonTypeDetail>> {
  return axios.get(`type/${type}`);
}
