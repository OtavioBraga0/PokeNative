// @ts-ignore
import styled from 'styled-components/native';
import {TEXT_COLOR} from '../../layout/constants';

type PokemonCard = {
  background: string;
};

export const Card = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: ${(props: PokemonCard) => props.background};
  width: 100%;
  height: 115px;

  margin-bottom: 30px;
  position: relative;
`;

export const Bg = styled.ImageBackground`
  flex: 1;

  flex-direction: row;
  padding: 20px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Id = styled.Text`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;

  color: ${TEXT_COLOR.number};
  opacity: 0.6;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;

  color: ${TEXT_COLOR.white};

  text-transform: capitalize;

  margin-bottom: 5px;
`;

export const Sprite = styled.Image`
  width: 130px;
  height: 130px;

  position: absolute;
  top: -25px;
  right: 10px;
`;
