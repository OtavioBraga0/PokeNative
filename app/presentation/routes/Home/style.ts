import {StyleSheet} from 'react-native';
// @ts-ignore
import styled from 'styled-components/native';
import {BACKGROUND_COLOR, TEXT_COLOR} from '../../layout/constants';

export const Header = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding: 42.5px;

  background-color: transparent;
`;

export const FilterButton = styled.TouchableOpacity`
  margin-left: 25px;
`;

export const Content = styled.FlatList`
  padding: 0 40px;

  height: 100%;
  flex: 1;
`;

export const Main = styled.View`
  height: 87%;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  color: ${TEXT_COLOR.black};

  margin-bottom: 10px;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: ${TEXT_COLOR.grey};

  margin-bottom: 25px;
`;

export const Search = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 27px 22px;

  background-color: ${BACKGROUND_COLOR.default_input};

  width: 100%;
  border-radius: 10px;

  margin-bottom: 45px;
`;

export const SearchInput = styled.TextInput`
  max-height: 19px;
  padding: 0;
  margin-left: 12px;

  color: ${TEXT_COLOR.grey};
`;

export const Bg = styled.ImageBackground`
  position: absolute;
  height: 20%;
  width: 100%;

  z-index: -1;

  opacity: 0.5;
`;

export const styles = StyleSheet.create({
  rotate90: {
    transform: [{rotate: '90deg'}],
  },
});
