import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './routes/Home';
import {NavigationContainer} from '@react-navigation/native';
import {Pokemon} from './routes/Pokemon';

const Stack = createStackNavigator();

export const ROUTES = {
  HOME: 'Home',
  POKEMON: 'Pokemon',
};

export interface RootStackParams {
  Home: undefined;
}

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTES.HOME}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.HOME} component={Home} />
        <Stack.Screen name={ROUTES.POKEMON} component={Pokemon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
