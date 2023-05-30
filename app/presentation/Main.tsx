import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {EngageStore} from '../domain/DomainLayer';
import {Routes} from './Routes';

export type MainProps = {
  store: EngageStore;
};

LogBox.ignoreLogs([
  'SerializableStateInvariantMiddleware',
  'Warning: React.createFactory()',
]);

export const Main: React.FC<MainProps> = (props: MainProps) => {
  const {store} = props;

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};
