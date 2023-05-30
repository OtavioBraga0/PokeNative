// @ts-ignore
import styled from 'styled-components/native';
import {PokemonTheme} from '../../routes/Pokemon';

export const Content = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 40px;
`;

export const MainContent = styled.View`
  margin-bottom: 80px;
`;

export const Title = styled.Text<PokemonTheme>`
  color: ${(props: PokemonTheme) => props.theme.color};
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;

  margin-bottom: 22px;
`;
