import { AnyAction } from "src/types/anyAction";
import { CharacterType } from '../models/Character';
import { initialState } from './inititialState';
import { characterActionTypes } from './actionTypes';

const {
  ADD_CHARACTER
} = characterActionTypes;

export const CharacterStateKey: string = 'characters';

export interface CharacterReducerState {
  selectedCharacter: number;
  characterList: CharacterType[];
}

export const charactersReducer = (state: CharacterReducerState = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_CHARACTER:
      return {
        ...state,
        characterList: [
          ...state.characterList,
          action.payload.character
        ]
      }
    default:
      return state;
  }
}