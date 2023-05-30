import React, {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from 'styled-components';
import {Content, MainContent, Title} from './style';

export const StatsTab: React.FC = () => {
  const {theme} = useContext(ThemeContext);

  console.log(theme);

  return (
    <Content>
      <MainContent>
        <Title>Base Stats</Title>
        <View></View>
      </MainContent>
    </Content>
  );
};
