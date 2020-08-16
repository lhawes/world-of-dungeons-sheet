import { AnyAction } from 'src/types/anyAction';
import { AppState, rootInitialState } from 'src/state/rootInitialState';

export type AnyReducer = (state: any, action: AnyAction) => any;

export interface CombinedReducers {
  [key: string]: AnyReducer
}

export function combineReducers(reducers: CombinedReducers) {  
  return (state = rootInitialState, action: AnyAction): AppState => {
    const newState = {};
    Object.keys(reducers).forEach((key: string) => {
      newState[key] = reducers[key](state[key], action);
    })
    return newState as AppState;
  }
}