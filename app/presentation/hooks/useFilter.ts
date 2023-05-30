import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {filterSelector} from '../../domain/ducks/filterReducer';
import {Pokemon} from '../../domain/entities/pokemon';

export const useFilter = () => {
  const {sort, generation, types, height, weight} = useSelector(filterSelector);

  const byWeight = useCallback(
    (pokemon: Pokemon) => {
      let listOfHeight = [];

      if (height.includes('light')) {
        listOfHeight.push(pokemon.height < 3166);
      }
      if (height.includes('normal')) {
        listOfHeight.push(pokemon.height >= 3166 && pokemon.height < 6332);
      }
      if (height.includes('heavy')) {
        listOfHeight.push(pokemon.height >= 6332 && pokemon.height < 9600);
      }

      return listOfHeight.includes(true);
    },
    [height],
  );

  const byHeight = useCallback(
    (pokemon: Pokemon) => {
      let listOfHeight = [];

      if (height.includes('short')) {
        listOfHeight.push(pokemon.height < 22);
      }
      if (height.includes('medium')) {
        listOfHeight.push(pokemon.height >= 22 && pokemon.height < 44);
      }
      if (height.includes('tall')) {
        listOfHeight.push(pokemon.height >= 44 && pokemon.height < 66);
      }

      return listOfHeight.includes(true);
    },
    [height],
  );

  const byName = useCallback(
    (pokemon: Pokemon, search: string) =>
      pokemon && pokemon.name.indexOf(search.toLowerCase()) !== -1,
    [],
  );

  const byType = useCallback(
    (pokemon: Pokemon) => {
      const haveType = pokemon.types.map(type =>
        types.includes(type.type.name),
      );

      return haveType.includes(true);
    },
    [types],
  );

  const handleSort = useCallback(
    (currentPokemon: Pokemon, nextPokemon: Pokemon) => {
      switch (sort) {
        case 'desc':
          return currentPokemon.id < nextPokemon.id
            ? 1
            : currentPokemon.id === nextPokemon.id
            ? 0
            : -1;
        case 'a-z':
          return currentPokemon.name < nextPokemon.name
            ? -1
            : currentPokemon.name === nextPokemon.name
            ? 0
            : 1;
        case 'z-a':
          return currentPokemon.name < nextPokemon.name
            ? 1
            : currentPokemon.name === nextPokemon.name
            ? 0
            : -1;
        default:
          return currentPokemon.id < nextPokemon.id
            ? -1
            : currentPokemon.id === nextPokemon.id
            ? 0
            : 1;
      }
    },
    [sort],
  );

  return {
    sort,
    generation,
    types,
    height,
    weight,
    actions: {byWeight, byHeight, byName, byType, handleSort},
  };
};
