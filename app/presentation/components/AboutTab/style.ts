// @ts-ignore
import styled from 'styled-components/native';
import {TEXT_COLOR} from '../../layout/constants';
import {PokemonTheme} from '../../routes/Pokemon';

export const Content = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 40px;
`;

export const MainContent = styled.View`
  margin-bottom: 80px;
`;

export const Description = styled.Text`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  color: ${TEXT_COLOR.grey};
`;

export const Title = styled.Text<PokemonTheme>`
  color: ${(props: PokemonTheme) => props.theme.color};
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;

  margin-bottom: 22px;
`;

export const Item = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
`;

export const SubTitle = styled.Text`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  width: 85px;
`;

type DataType = {
  isCapitalize: boolean;
};

export const Data = styled.Text`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: ${TEXT_COLOR.grey};
  text-transform: ${(props: DataType) =>
    props.isCapitalize ? 'capitalize' : 'lowercase'};
`;

export const SubData = styled.Text`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: ${TEXT_COLOR.grey};
  margin-left: 5px;
`;

type GenderDataType = {
  color: string;
};

export const GenderData = styled.Text`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: ${(props: GenderDataType) => props.color};
`;
