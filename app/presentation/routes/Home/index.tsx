import React, {useEffect, useState} from 'react';
import {PokemonCard} from '../../components/PokemonCard';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

import {
  Description,
  Header,
  Search,
  Title,
  Content,
  SearchInput,
  FilterButton,
  styles,
  Main,
} from './style';
import {BACKGROUND_COLOR, TEXT_COLOR} from '../../layout/constants';
import {SafeAreaView} from 'react-native-safe-area-context';

import {SortFilterModal} from '../../components/SortModal';
import {Pokemon} from '../../../domain/entities/pokemon';
import {GenerationFilterModal} from '../../components/GenerationFilterModal';
import {Loading} from '../../components/Loading';
import {FilterModal} from '../../components/FilterModal';
import {usePokemon} from '../../hooks/usePokemon';
import {useFilter} from '../../hooks/useFilter';

export const Home: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  const [sortModalOpen, setSortModalOpen] = useState<boolean>(false);
  const [filterModalOpen, setFilterModalOpen] = useState<boolean>(false);
  const [generationModalOpen, setGenerationModalOpen] =
    useState<boolean>(false);

  const {
    pokemons,
    isLoading,
    actions: {fetchPokemons},
  } = usePokemon();

  const {
    generation,
    types,
    height,
    weight,
    actions: {byHeight, byName, byType, byWeight, handleSort},
  } = useFilter();

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons, generation]);

  return (
    <SafeAreaView style={{backgroundColor: BACKGROUND_COLOR.white}}>
      <Header>
        <FilterButton onPress={() => setGenerationModalOpen(true)}>
          <FontistoIcon
            name="nav-icon-grid-a"
            color={TEXT_COLOR.black}
            size={20}
          />
        </FilterButton>
        <FilterButton
          style={styles.rotate90}
          onPress={() => setSortModalOpen(true)}>
          <FontistoIcon name="arrow-swap" color={TEXT_COLOR.black} size={20} />
        </FilterButton>
        <FilterButton onPress={() => setFilterModalOpen(true)}>
          <FontistoIcon name="filter" color={TEXT_COLOR.black} size={20} />
        </FilterButton>
      </Header>
      <Main>
        <Content
          ListEmptyComponent={<Loading isLoading={isLoading} />}
          ListHeaderComponent={
            <>
              <Title>Pokédex</Title>
              <Description>
                Search for Pokémon by name or using the National Pokédex number.
              </Description>
              <Search>
                <FontAwesomeIcon
                  name="search"
                  color={TEXT_COLOR.grey}
                  size={16}
                />
                <SearchInput
                  placeholder="What Pokémon are you looking for?"
                  value={search}
                  onChangeText={(value: string) => setSearch(value)}
                />
              </Search>
            </>
          }
          data={
            isLoading
              ? []
              : pokemons
                  .slice()
                  .sort(handleSort)
                  .filter(pokemon => byName(pokemon, search))
                  .filter((pokemon: Pokemon) =>
                    types.length > 0 ? byType(pokemon) : true,
                  )
                  .filter((pokemon: Pokemon) =>
                    height.length > 0 ? byHeight(pokemon) : true,
                  )
                  .filter((pokemon: Pokemon) =>
                    weight.length > 0 ? byWeight(pokemon) : true,
                  )
          }
          renderItem={({item}: {item: Pokemon}) => <PokemonCard {...item} />}
          keyExtractor={(pokemon: Pokemon) => pokemon.name}
        />
      </Main>
      <SortFilterModal open={sortModalOpen} setOpen={setSortModalOpen} />
      <FilterModal open={filterModalOpen} setOpen={setFilterModalOpen} />
      <GenerationFilterModal
        open={generationModalOpen}
        setOpen={setGenerationModalOpen}
      />
    </SafeAreaView>
  );
};
