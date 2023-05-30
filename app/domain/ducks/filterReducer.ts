import {
  createReducer,
  createAction,
  PayloadAction,
  Reducer,
} from '@reduxjs/toolkit';
import {PayloadActionCreator} from '@reduxjs/toolkit/src/createAction';
import {EngageState} from '../DomainLayer';

export type FilterActionsType = PayloadAction<null> | PayloadAction<boolean>;

export interface FilterState {
  types: string[];
  sort: 'asc' | 'desc' | 'a-z' | 'z-a';
  generation: string;
  height: string[];
  weight: string[];
}

export const FILTER_INITIAL_STATE: FilterState = {
  types: [],
  sort: 'asc',
  generation: 'i',
  height: [],
  weight: [],
};

export const filterSelector = (state: EngageState): FilterState => state.filter;

export const handleFilterThunk: PayloadActionCreator<{
  [key: string]: string | (number | string)[];
}> = createAction('duck/filter/handleFilter');

export const handleResetThunk: PayloadActionCreator<undefined> = createAction(
  'duck/filter/handleResetThunk',
);

function handleFilter(
  state: FilterState,
  action: PayloadAction<{[key: string]: string | string[] | number[]}>,
): FilterState {
  return {
    ...state,
    ...action.payload,
  };
}

function handleReset(state: FilterState): FilterState {
  return {
    ...state,
    types: [],
    height: [],
    weight: [],
  };
}

const builderReducer = (builder: any) =>
  builder
    .addCase(handleFilterThunk.type, handleFilter)
    .addCase(handleResetThunk.type, handleReset);

export const filterReducer: Reducer<FilterState, FilterActionsType> =
  createReducer(FILTER_INITIAL_STATE, builderReducer);
