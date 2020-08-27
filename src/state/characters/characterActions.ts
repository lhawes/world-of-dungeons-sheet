import { CharacterType, Skills, Abilities } from '../models/Character';
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

export const setCharacterSkillProperty = ({ active, skillName }: { active: boolean, skillName: Skills }) => {
  return {
    type: characterActionTypes.SET_CHARACTER_SKILL,
    payload: {
      skillName,
      active,
    }
  }
}

export const setCharacterAbilityProperty = ({ active, abilityName }: { active: boolean, abilityName: Abilities }) => {
  return {
    type: characterActionTypes.SET_CHARACTER_ABILITY,
    payload: {
      abilityName,
      active,
    }
  }
}

export const setCharacterNameAction = setCharacterPropertyFactory('name');
export const setCharacterCoinAction = setCharacterPropertyFactory('coin', numberNormalizer);
export const setCharacterNotesAction = setCharacterPropertyFactory('notes');
export const setCharacterXpAction = setCharacterPropertyFactory('xp', numberNormalizer);
export const setCharacterCurrentHitPointsAction = setCharacterPropertyFactory('currentHitPoints', numberNormalizer);
