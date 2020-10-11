import { characterActionTypes } from 'src/state/characters/actionTypes';

export interface AnyAction {
  type: characterActionTypes,
  payload?: any,
  [key: string]: any
}