import { CharacterType } from '../models/Character';
import { AnyAction } from 'src/types/anyAction';
import { characterActionTypes } from './actionTypes';

export const addCharacterAction = (character: CharacterType): AnyAction => ({
  type: characterActionTypes.ADD_CHARACTER,
  payload: {
    character
  }
})