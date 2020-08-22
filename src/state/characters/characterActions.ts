import { CharacterType } from '../models/Character';
import { AnyAction } from 'src/types/anyAction';
import { characterActionTypes } from './actionTypes';

export const addCharacterAction = (character: CharacterType): AnyAction => ({
  type: characterActionTypes.ADD_CHARACTER,
  payload: {
    character
  }
})

export const setCharacterPropertyFactory = (property: string, normalizer?: (v: any) => any) => (value: number|string) => ({
  type: characterActionTypes.SET_CHARACTER_PROPERTY,
  payload: {
    property,
    value: normalizer ? normalizer(value) : value,
  }
});

const numberNormalizer = (v: string) => +v

export const setCharacterNameAction = setCharacterPropertyFactory('name');
export const setCharacterCoinAction = setCharacterPropertyFactory('coin', numberNormalizer);
export const setCharacterNotesAction = setCharacterPropertyFactory('notes');
export const setCharacterXpAction = setCharacterPropertyFactory('xp', numberNormalizer);
export const setCharacterCurrentHitPointsAction = setCharacterPropertyFactory('currentHitPoints', numberNormalizer);
