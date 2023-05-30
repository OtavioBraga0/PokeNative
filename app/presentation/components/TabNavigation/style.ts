// @ts-ignore
import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const Navigation = styled.View`
  flex-direction: row;
`;

type ItemType = {
  activated: boolean;
};

export const Item = styled.TouchableOpacity<ItemType>`
  justify-content: center;
  align-items: center;

  padding: 16px 0;
  flex: 1;
`;

export const ItemText = styled(Animated.Text)`
  color: #fff;
  font-weight: ${(props: ItemType) => (props.activated ? '700' : '400')};
  font-size: 16px;
  line-height: 19px;
`;

export const Bg = styled(Animated.Image)`
  position: absolute;
  top: 0;
`;
