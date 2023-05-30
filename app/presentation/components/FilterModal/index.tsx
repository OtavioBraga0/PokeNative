import React, {useCallback, useEffect, useState} from 'react';
import {ModalBase, ModalBaseProps} from '../ModalBase';
import {
  Title,
  Description,
  TitleFilter,
  HorizontalScroll,
  Filter,
  styles,
  ActionGroup,
  Button,
} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {
  filterSelector,
  handleFilterThunk,
  handleResetThunk,
} from '../../../domain/ducks/filterReducer';
import {TypeBadge, HeightBadge, WeightBadge} from '../FilterBadge';
import {ScrollView} from 'react-native';

const TYPES = [
  'bug',
  'dark',
  'dragon',
  'electric',
  'fairy',
  'fighting',
  'fire',
  'flying',
  'ghost',
  'grass',
  'ground',
  'ice',
  'normal',
  'poison',
  'psychic',
  'rock',
  'steel',
  'water',
];

const WEIGHT = ['light', 'normal', 'heavy'];
const HEIGHT = ['short', 'medium', 'tall'];

type FilterProps = {
  [key: string]: string[];
};

export const FilterModal: React.FC<ModalBaseProps> = ({...modalProps}) => {
  const {height, types, weight} = useSelector(filterSelector);

  const [selectedFilters, setSelectedFilters] = useState<FilterProps>({
    height: [],
    types: [],
    weight: [],
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedFilters({
      height,
      types,
      weight,
    });
  }, [types, weight, height]);

  const handleSelect = useCallback((selectedFilter: string, filter: string) => {
    setSelectedFilters(prev => {
      const checkFilter = prev[filter].indexOf(selectedFilter);
      let filterResult = {};

      if (checkFilter === -1) {
        filterResult = {...prev, [filter]: [...prev[filter], selectedFilter]};
      } else {
        filterResult = {
          ...prev,
          [filter]: prev[filter].filter(
            prevFilter => prevFilter !== selectedFilter,
          ),
        };
      }

      return filterResult;
    });
  }, []);

  const handleReset = useCallback(() => {
    dispatch(handleResetThunk());
  }, [dispatch]);

  const handleApply = useCallback(() => {
    dispatch(handleFilterThunk(selectedFilters));
  }, [selectedFilters, dispatch]);

  return (
    <ModalBase {...modalProps}>
      <ScrollView style={styles.scrollContent}>
        <Title>Filter</Title>
        <Description>
          Use advanced search to explore Pokémon by type, weakness, height and
          more!
        </Description>
        <Filter>
          <TitleFilter>Types</TitleFilter>
          <HorizontalScroll
            horizontal
            data={TYPES}
            keyExtractor={(type: string) => type}
            renderItem={({item}: {item: string}) => (
              <TypeBadge
                onPress={() => handleSelect(item, 'types')}
                name={item}
                active={selectedFilters.types.indexOf(item) !== -1}
              />
            )}
          />
        </Filter>
        <Filter>
          <TitleFilter>Heights</TitleFilter>
          <HorizontalScroll
            horizontal
            data={HEIGHT}
            keyExtractor={(type: string) => type}
            renderItem={({item}: {item: string}) => (
              <HeightBadge
                onPress={() => handleSelect(item, 'height')}
                name={item.toString()}
                active={selectedFilters.height.indexOf(item) !== -1}
              />
            )}
          />
        </Filter>
        <Filter>
          <TitleFilter>Weight</TitleFilter>
          <HorizontalScroll
            horizontal
            data={WEIGHT}
            keyExtractor={(type: string) => type}
            renderItem={({item}: {item: string}) => (
              <WeightBadge
                onPress={() => handleSelect(item, 'weight')}
                name={item.toString()}
                active={selectedFilters.weight.indexOf(item) !== -1}
              />
            )}
          />
        </Filter>
        <ActionGroup>
          <Button activated={false} onPress={handleReset}>
            Reset
          </Button>

          <Button activated onPress={handleApply}>
            Apply
          </Button>
        </ActionGroup>
      </ScrollView>
    </ModalBase>
  );
};
