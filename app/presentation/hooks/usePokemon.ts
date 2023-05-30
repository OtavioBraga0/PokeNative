import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {pokemonSelector} from '../../domain/ducks/pokemonReducer';
import {Type} from '../../domain/entities/pokemon';
import {
  getPokemonSpecieDetailThunk,
  getPokemonsThunk,
  getPokemonTypeDetailThunk,
} from '../../domain/thunks/pokemonThunk';

export const usePokemon = () => {
  const {pokemons, isLoading, detailedPokemon} = useSelector(pokemonSelector);
  const dispatch = useDispatch();

  const fetchPokemons = useCallback(() => {
    dispatch(getPokemonsThunk());
  }, [dispatch]);

  const getPokemonDetails = useCallback(() => {
    dispatch(getPokemonSpecieDetailThunk(detailedPokemon?.name as string));
    dispatch(getPokemonTypeDetailThunk(detailedPokemon?.types as Type[]));
  }, [detailedPokemon, dispatch]);

  return {
    pokemons,
    detailedPokemon,
    isLoading,
    actions: {
      fetchPokemons,
      getPokemonDetails,
    },
  };
};
