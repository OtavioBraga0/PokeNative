// @ts-ignore
import styled from 'styled-components/native';
import {BACKGROUND_COLOR, TEXT_COLOR} from '../../layout/constants';

type CardProps = {
  background: string;
};

export const Card = styled.View`
  flex-direction: row;
  align-items: center;

  background-color: ${(props: CardProps) => props.background};
  color: ${BACKGROUND_COLOR.white};

  padding: 5px;
  border-radius: 3px;

  height: 25px;

  margin-right: 5px;
`;

export const Badge = styled.View`
  flex-direction: row;
  align-items: center;

  background-color: ${(props: CardProps) => props.background};
  color: ${BACKGROUND_COLOR.white};

  padding: 5px;
  border-radius: 3px;

  max-height: 25px;
  max-width: 25px;
`;

export const Name = styled.Text`
  color: ${TEXT_COLOR.white};
  text-transform: capitalize;

  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  margin-left: 5px;
`;
