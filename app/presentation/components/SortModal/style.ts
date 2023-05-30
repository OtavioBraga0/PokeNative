// @ts-ignore
import styled from 'styled-components/native';
import {TEXT_COLOR} from '../../layout/constants';

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

  margin-bottom: 15px;
`;

export const Content = styled.ScrollView`
  margin: 0 -40px;
  padding: 0 40px;
`;
