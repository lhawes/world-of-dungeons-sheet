import { initialState as characterInitialState } from './characters/inititialState';

export const rootInitialState = {
  characters: characterInitialState,
}

export type AppState = typeof rootInitialState;