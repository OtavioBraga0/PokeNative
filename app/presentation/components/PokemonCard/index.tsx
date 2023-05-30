import React from 'react';
import {Pokemon, Type} from '../../../domain/entities/pokemon';

import {pure} from 'recompose';

import {Bg, Card, Content, Id, Name, Sprite} from './style';
import {BG_COLORS} from '../../layout/constants';

// @ts-ignore
import bgDetails from '../../assets/pokemonCard_bg.png';
import {TypeCard} from '../Type';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {ROUTES} from '../../Routes';
import {useDispatch} from 'react-redux';
import {selectPokemon} from '../../../domain/ducks/pokemonReducer';

const PurePokemonCard: React.FC<Pokemon> = props => {
  const navigation = useNavigation();

  const {name, types, id, sprites} = props;

  const dispatch = useDispatch();

  return (
    <Card
      background={BG_COLORS[types[0].type.name]}
      onPress={() => {
        navigation.navigate(ROUTES.POKEMON);
        dispatch(selectPokemon(props));
      }}>
      <Bg source={bgDetails}>
        <Content>
          <Id>#{id.toString().padStart(3, '0')}</Id>
          <Name>{name}</Name>
          <FlatList
            horizontal={true}
            data={types}
            keyExtractor={(typeExtractor: Type) => typeExtractor.type.name}
            renderItem={(type: {item: Type}) => <TypeCard {...type.item} />}
          />
        </Content>
        <Sprite
          width={50}
          height={50}
          source={{uri: sprites.other['official-artwork'].front_default}}
        />
      </Bg>
    </Card>
  );
};

export const PokemonCard = pure(PurePokemonCard);
