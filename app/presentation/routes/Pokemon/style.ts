import {StyleSheet} from 'react-native';
import {SafeAreaViewProps} from 'react-native-safe-area-context';
// @ts-ignore
import styled from 'styled-components/native';
import {TEXT_COLOR} from '../../layout/constants';

interface ContainerProp extends SafeAreaViewProps {
  background: string;
}

export const Container = styled.SafeAreaView`
  background-color: ${(props: ContainerProp) => props.background};
  height: 100%;
`;

export const BackButton = styled.TouchableOpacity`
  width: 100%;
  margin: 0 40px;
`;

export const MainContainer = styled.View`
  max-width: 100%;
  height: 125px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 32px 40px;
`;

export const Content = styled.View`
  justify-content: center;
`;

export const Id = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;

  color: ${TEXT_COLOR.number};
  opacity: 0.6;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;

  color: ${TEXT_COLOR.white};

  text-transform: capitalize;

  margin-bottom: 5px;
`;

export const Sprite = styled.Image`
  width: 130px;
  height: 130px;

  margin-right: 25px;
`;

export const TypeList = styled.FlatList`
  max-height: 25px;
`;

export const style = StyleSheet.create({
  tabNavigation: {
    marginBottom: -40,
  },
  tabScreen: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
