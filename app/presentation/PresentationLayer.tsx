import React from 'react';
import {EngageStore} from '../domain/DomainLayer';
import {Main} from './Main';

export function initializePresentationLayer(store: EngageStore): React.FC {
  const App: React.FC = () => <Main store={store} />;
  return App;
}
