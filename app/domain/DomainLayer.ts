import {
  configureStore,
  EnhancedStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import {ReducersMapObject} from 'redux';
import {Persistor} from 'redux-persist/es/types';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FilterActionsType,
  filterReducer,
  FilterState,
} from './ducks/filterReducer';

import {PokemonState, pokemonReducer} from './ducks/pokemonReducer';

export interface EngageState {
  readonly filter: FilterState;
  readonly pokemon: PokemonState;
}

export type EngageActions = FilterActionsType;

export type EngageStore = EnhancedStore<EngageState, EngageActions>;
const rootReducer: ReducersMapObject<EngageState, EngageActions> = {
  filter: filterReducer,
  pokemon: pokemonReducer,
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(rootReducer),
);

export const initializeDomainLayer = (
  preloadedState?: EngageState,
): {store: EngageStore; persistor: Persistor} => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    preloadedState,
  });
  const persistor = persistStore(store);
  return {store, persistor};
};
