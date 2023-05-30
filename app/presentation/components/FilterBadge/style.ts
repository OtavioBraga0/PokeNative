// @ts-ignore
import styled from 'styled-components/native';
import {BadgeProps} from '.';

interface BadgeStyleProps extends BadgeProps {
  type: string;
  background: string;
}

export const Badge = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  border-radius: 25px;

  align-items: center;
  justify-content: center;

  margin-right: 10px;

  background-color: ${(props: BadgeStyleProps) => props.background};
`;
