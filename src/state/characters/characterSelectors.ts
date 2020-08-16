import { AppState } from '../rootInitialState'
import { CharacterStateKey, CharacterReducerState } from './characterReducer';
import { CharacterType, SpecialAbilities, Attributes, Skills } from '../models/Character';
import { ItemInstance, ArmorWeight } from '../models/Item';

export const getCharacterSection = (state: AppState): CharacterReducerState => 
  state[CharacterStateKey];

export const getCharacterList = (state: AppState) => 
  getCharacterSection(state).characterList;

export const getSelectedCharacterIndex = (state: AppState): number => 
  getCharacterSection(state).selectedCharacter;

export const getSelectedCharacter = (state: AppState): CharacterType => {
  const selectedCharacter = getSelectedCharacterIndex(state);
  return getCharacterList(state)[selectedCharacter];
}

export const getSelectedCharacterName = (state: AppState): string => 
  getSelectedCharacter(state)?.name ?? null;

export const getSelectedCharacterAbilities = (state: AppState): SpecialAbilities => 
  getSelectedCharacter(state)?.specialAbilities ?? {};

export const getSelectedCharacterEquipment = (state: AppState): ItemInstance[] => 
  getSelectedCharacter(state)?.equipment ?? [];

export const getSelectedCharacterArmor = (state: AppState): ItemInstance[] => {
  return getSelectedCharacterEquipment(state).filter((item: ItemInstance) => {
    return !!item.armor;
  })
}

export const getSelectedCharacterWeapons = (state: AppState): ItemInstance[] => {
  return getSelectedCharacterEquipment(state).filter((item: ItemInstance) => {
    return !!item.damage;
  })
}

export const getSelectedCharacterActiveArmor = (state: AppState): ItemInstance => {
  return getSelectedCharacterArmor(state).filter((item: ItemInstance) => {
    return !!item.equipped;
  })[0] ?? null;
}

export const getSelectedCharacterActiveArmorClass = (state: AppState): ArmorWeight | null => 
  getSelectedCharacterActiveArmor(state)?.armor?.class ?? null;

export const getSelectedCharacterArmorSpeed = (state: AppState): string => {
  const speedMap = {
    [ArmorWeight.full]: 'Slow',
    [ArmorWeight.light]: 'Normal',
    [ArmorWeight.none]: 'Fast',
  };
  const ActiveArmor = getSelectedCharacterActiveArmorClass(state);

  return ActiveArmor ? speedMap[ActiveArmor] : speedMap[ArmorWeight.none];
}

export const getSelectedCharacterAttributes = (state: AppState): Attributes => 
  getSelectedCharacter(state)?.attributes ?? null;

export const getSelectedCharacterClass = (state: AppState): string => 
  getSelectedCharacter(state)?.class ?? '';

export const getSelectedCharacterCoin = (state: AppState): number => 
  getSelectedCharacter(state)?.coin ?? 0;

export const getSelectedCharacterLevel = (state: AppState): number => 
  getSelectedCharacter(state)?.level ?? 1;

export const getSelectedCharacterHitPoints = (state: AppState): number => 
  getSelectedCharacter(state)?.currentHitPoints ?? 0;

export const getSelectedCharacterNotes = (state: AppState): string => 
  getSelectedCharacter(state)?.notes ?? '';

export const getSelectedCharacterSkills = (state: AppState): Skills => 
  getSelectedCharacter(state)?.skills ?? {};

export const getSelectedCharacterXp = (state: AppState): number => 
  getSelectedCharacter(state)?.xp ?? 0;

// getSelectedCharacterTotalArmor
// equipped armor + any armor with a bonus?

