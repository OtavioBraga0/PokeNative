// @ts-ignore
import styled from 'styled-components/native';
import {ButtonProps} from '.';
import {BACKGROUND_COLOR, TEXT_COLOR} from '../../layout/constants';

export const Button = styled.TouchableOpacity`
  padding: 20px 0;
  align-items: center;
  justify-content: center;

  background-color: ${(props: ButtonProps) =>
    props.activated ? BACKGROUND_COLOR.button : BACKGROUND_COLOR.default_input};

  border-radius: 10px;

  margin-top: 20px;
`;

export const Text = styled.Text`
  color: ${(props: ButtonProps) =>
    props.activated ? TEXT_COLOR.white : TEXT_COLOR.grey};

  font-size: 16px;
  line-height: 19px;
`;
