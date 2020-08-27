import { AnyAction } from "src/types/anyAction";
import { CharacterType } from '../models/Character';
import { initialState } from './inititialState';
import { characterActionTypes } from './actionTypes';

const {
  ADD_CHARACTER,
  SET_CHARACTER_PROPERTY,
  SET_CHARACTER_ATTRIBUTE,
} = characterActionTypes;

export const CharacterStateKey: string = 'characters';

export interface CharacterReducerState {
  selectedCharacter: number;
  characterList: CharacterType[];
}

export const charactersReducer = (state: CharacterReducerState = initialState, action: AnyAction) => {
  const newState: CharacterReducerState = JSON.parse(JSON.stringify(state));
console.log('reducer', action)
  switch (action.type) {
    case ADD_CHARACTER:
      return {
        ...state,
        characterList: [
          ...state.characterList,
          action.payload.character
        ]
      }

    case SET_CHARACTER_PROPERTY:
      const { property, value } = action.payload; 
      newState.characterList[state.selectedCharacter][property] = value;
      return newState;

    case SET_CHARACTER_ATTRIBUTE:
      const { name, score } = action.payload; 
      newState.characterList[state.selectedCharacter].attributes[name] = score;
      return newState;

    default:
      return state;
  }
}