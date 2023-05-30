import React, {useEffect, useMemo} from 'react';
import {View} from 'react-native';
import {BG_COLORS, TYPE_COLORS} from '../../layout/constants';
import {
  BackButton,
  Container,
  Content,
  Id,
  MainContainer,
  Name,
  Sprite,
  style,
  TypeList,
} from './style';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';
import {Type} from '../../../domain/entities/pokemon';
import {TypeCard} from '../../components/Type';
import {AboutTab} from '../../components/AboutTab';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import {TabNavigation} from '../../components/TabNavigation';
import {ThemeProvider} from 'styled-components';
import {StatsTab} from '../../components/StatsTab';
import {usePokemon} from '../../hooks/usePokemon';

const Tab = createMaterialTopTabNavigator();

export type PokemonTheme = {
  theme: {
    color: string;
  };
};

export const Pokemon: React.FC = () => {
  const {
    detailedPokemon,
    actions: {getPokemonDetails},
  } = usePokemon();

  const navigation = useNavigation();

  useEffect(() => {
    getPokemonDetails();
  }, [getPokemonDetails]);

  const theme = useMemo(
    () => ({color: TYPE_COLORS[detailedPokemon?.types[0].type.name as string]}),
    [detailedPokemon?.types],
  );

  return (
    detailedPokemon && (
      <ThemeProvider theme={theme}>
        <Container background={BG_COLORS[detailedPokemon.types[0].type.name]}>
          <View>
            <BackButton onPress={navigation.goBack}>
              <Ionicons name="arrow-back" color="#FFF" size={20} />
            </BackButton>
          </View>
          <MainContainer>
            <Sprite
              width={50}
              height={50}
              source={{
                uri: detailedPokemon.sprites.other['official-artwork']
                  .front_default,
              }}
            />
            <Content>
              <Id>#{detailedPokemon.id.toString().padStart(3, '0')}</Id>
              <Name>{detailedPokemon.name}</Name>
              <TypeList
                horizontal={true}
                data={detailedPokemon.types}
                keyExtractor={(typeExtractor: Type) => typeExtractor.type.name}
                renderItem={(type: {item: Type}) => <TypeCard {...type.item} />}
              />
            </Content>
          </MainContainer>
          <Tab.Navigator
            style={style.tabNavigation}
            tabBar={(props: MaterialTopTabBarProps) => (
              <TabNavigation {...props} />
            )}
            sceneContainerStyle={style.tabScreen}>
            <Tab.Screen name="About" component={AboutTab} />
            <Tab.Screen name="Stats" component={StatsTab} />
            <Tab.Screen name="Evolution" component={AboutTab} />
          </Tab.Navigator>
        </Container>
      </ThemeProvider>
    )
  );
};
