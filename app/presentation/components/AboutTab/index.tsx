import React, {useCallback, useMemo} from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Gap, style} from '../../layout/shared';
import {Loading} from '../Loading';
import {TypeBadge} from '../Type';

import {
  Content,
  Data,
  Description,
  GenderData,
  Item,
  MainContent,
  SubData,
  SubTitle,
  Title,
} from './style';

import IonIcons from 'react-native-vector-icons/Ionicons';
import {GENDER_COLOR} from '../../layout/constants';
import {usePokemon} from '../../hooks/usePokemon';

export const AboutTab: React.FC = () => {
  const {detailedPokemon, isLoading} = usePokemon();

  const describe = useMemo(() => {
    const flavorText =
      (detailedPokemon?.pokemon_specie?.flavor_text_entries[0]
        .flavor_text as string) || '';

    if (flavorText.replaceAll) {
      return flavorText.replaceAll('\n', ' ');
    }
  }, [detailedPokemon?.pokemon_specie]);

  const convertToMeters = useCallback(
    (height: number) => (height / 39.37).toFixed(2),
    [],
  );

  const convertToKg = useCallback(
    (weight: number) => (weight / 2.205).toFixed(2),
    [],
  );

  const convertToPercentage = useCallback(catchRate => {
    return (((catchRate * 1 * 1) / 3 / 256) * 100).toFixed(1);
  }, []);

  const convertGender: number[] = useMemo(() => {
    if (detailedPokemon?.pokemon_specie) {
      const gender = (detailedPokemon.pokemon_specie.gender_rate / 8) * 100;
      return [gender, 100 - gender];
    }
    return [];
  }, [detailedPokemon?.pokemon_specie]);

  const convertEggGroup: string = useMemo(() => {
    if (detailedPokemon?.pokemon_specie) {
      return (
        detailedPokemon?.pokemon_specie.egg_groups.map(
          egg => egg.name,
        ) as string[]
      ).toString();
    }
    return '';
  }, [detailedPokemon?.pokemon_specie]);

  return (
    <Content>
      {!detailedPokemon?.pokemon_specie || isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <MainContent>
          <Description>{describe}</Description>
          <View>
            <Title>Pokédex Data</Title>
            <Item>
              <SubTitle>Species</SubTitle>
              <Data isCapitalize={true}>
                {detailedPokemon?.pokemon_specie.shape.name} Pokémon
              </Data>
            </Item>
            <Item>
              <SubTitle>Height</SubTitle>
              <Data>{convertToMeters(detailedPokemon?.height as number)}m</Data>
              <SubData>({detailedPokemon?.height}')</SubData>
            </Item>
            <Item>
              <SubTitle>Weight</SubTitle>
              <Data>{convertToKg(detailedPokemon?.weight as number)}kg</Data>
              <SubData>({detailedPokemon?.weight} lbs)</SubData>
            </Item>
            <Item>
              <SubTitle>Abilities</SubTitle>
              <View>
                <Data isCapitalize={true}>
                  1. {detailedPokemon?.abilities[0].ability.name}
                </Data>
                {detailedPokemon?.abilities[1].ability.name && (
                  <SubData>
                    <Text style={style.capitilize}>
                      {detailedPokemon?.abilities[1].ability.name}
                    </Text>{' '}
                    (hidden ability)
                  </SubData>
                )}
              </View>
            </Item>
            {detailedPokemon.weaknesses && (
              <Item>
                <SubTitle>Weaknesses</SubTitle>
                <ScrollView horizontal={true}>
                  {detailedPokemon?.weaknesses.map(weakness => (
                    <Gap gapDirection="row" size={5} key={weakness}>
                      <TypeBadge name={weakness} />
                    </Gap>
                  ))}
                </ScrollView>
              </Item>
            )}
          </View>
          <View>
            <Title>Training</Title>
            <Item>
              <SubTitle>Catch Rate</SubTitle>
              <Data>{detailedPokemon?.pokemon_specie.capture_rate}</Data>
              <SubData>
                (
                {convertToPercentage(
                  detailedPokemon?.pokemon_specie.capture_rate as number,
                )}
                % with PokéBall, full HP)
              </SubData>
            </Item>
            <Item>
              <SubTitle>Base Friendship</SubTitle>
              <Data>{detailedPokemon?.pokemon_specie.base_happiness}</Data>
              <SubData>(normal)</SubData>
            </Item>
            <Item>
              <SubTitle>Base Exp</SubTitle>
              <Data>{detailedPokemon?.base_experience}</Data>
            </Item>
            <Item>
              <SubTitle>Growth Rate</SubTitle>
              <Data style={style.capitilize}>
                {detailedPokemon?.pokemon_specie.growth_rate.name.replace(
                  '-',
                  ' ',
                )}
              </Data>
            </Item>
          </View>
          <View>
            <Title>Breeding</Title>
            <Item>
              <SubTitle>Gender</SubTitle>
              <GenderData color={GENDER_COLOR.male}>
                <IonIcons name="male" color={GENDER_COLOR.male} />
                {convertGender[1]},
              </GenderData>
              <GenderData color={GENDER_COLOR.female}>
                <IonIcons name="female" color={GENDER_COLOR.female} />
                {convertGender[0]}
              </GenderData>
            </Item>
            <Item>
              <SubTitle>Egg Groups</SubTitle>
              <Data style={style.capitilize}>
                {convertEggGroup.replace(',', ', ')}
              </Data>
            </Item>
          </View>
        </MainContent>
      )}
    </Content>
  );
};
