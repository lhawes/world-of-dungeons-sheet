import { CharacterType } from '../models/Character';
import { AnyAction } from 'src/types/anyAction';
import { characterActionTypes } from './actionTypes';
import { numberNormalizer } from 'src/utils/normalizers';

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

export const setCharacterAttribute = (attributeScore: string, attributeName: string): AnyAction => {
  return {
    type: characterActionTypes.SET_CHARACTER_ATTRIBUTE,
    payload: {
      name: attributeName,
      score: numberNormalizer(attributeScore),
    }
  }
}

export const setCharacterNameAction = setCharacterPropertyFactory('name');
export const setCharacterCoinAction = setCharacterPropertyFactory('coin', numberNormalizer);
export const setCharacterNotesAction = setCharacterPropertyFactory('notes');
export const setCharacterXpAction = setCharacterPropertyFactory('xp', numberNormalizer);
export const setCharacterCurrentHitPointsAction = setCharacterPropertyFactory('currentHitPoints', numberNormalizer);
