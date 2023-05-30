// @ts-ignore
import styled from 'styled-components/native';
import {BACKGROUND_COLOR, TEXT_COLOR} from '../../layout/constants';
import {StyleSheet} from 'react-native';

type ButtonProps = {
  activated: boolean;
  isEven: boolean;
};

export const Title = styled.Text`
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;

  color: ${TEXT_COLOR.black};

  margin-bottom: 5px;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: ${TEXT_COLOR.grey};

  margin-bottom: 45px;
`;

export const ButtonAction = styled.TouchableOpacity`
  padding: 17px 0;
  align-items: center;
  justify-content: center;

  background-color: ${(props: ButtonProps) =>
    props.activated ? BACKGROUND_COLOR.button : BACKGROUND_COLOR.default_input};

  border-radius: 10px;

  margin-top: 14px;
  margin-right: ${(props: ButtonProps) => (props.isEven ? 0 : '14px')};

  flex: 1;
  height: 129px;

  position: relative;
`;

export const ButtonActionText = styled.Text`
  color: ${(props: ButtonProps) =>
    props.activated ? TEXT_COLOR.white : TEXT_COLOR.grey};

  font-size: 16px;
  line-height: 19px;

  text-align: center;
`;

export const Grid = styled.FlatList`
  margin: 0 -40px;
  padding: 0 40px;
`;

export const Sprite = styled.Image`
  width: 125px;
  height: 45px;

  margin-bottom: 15px;
`;

export const Background = styled.ImageBackground`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const styles = StyleSheet.create({
  sprite: {
    resizeMode: 'contain',
  },
  bg: {
    resizeMode: 'cover',
  },
});
