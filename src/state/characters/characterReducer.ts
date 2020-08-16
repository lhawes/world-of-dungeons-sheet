import { AnyAction } from "src/types/anyAction";
import { CharacterType } from '../models/Character';
import { initialState } from './inititialState';

export const CharacterStateKey: string = 'characters';

export interface CharacterReducerState {
  selectedCharacter: number;
  characterList: CharacterType[];
}

export const charactersReducer = (state: CharacterReducerState = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'test':
      return {
        ...state,

      }
    default:
      return state;
  }
}