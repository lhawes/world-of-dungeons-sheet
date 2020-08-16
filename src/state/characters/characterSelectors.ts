import { AppState } from '../rootInitialState'
import { CharacterStateKey, CharacterReducerState } from './characterReducer';
import { CharacterType, CharacterAbilities, Attributes, CharacterSkills } from '../models/Character';
import { ItemInstance, ArmorWeight } from '../models/Item';
import { isWeapon, isArmor, isWornArmor, isShield } from 'src/constants/itemCategories';
import { wornArmorSpeed } from 'src/constants/wornArmorSpeed';

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

export const getSelectedCharacterAbilities = (state: AppState): CharacterAbilities => 
  getSelectedCharacter(state)?.specialAbilities ?? {};

export const getSelectedCharacterAllEquipment = (state: AppState): ItemInstance[] => 
  getSelectedCharacter(state)?.equipment ?? [];

export const getSelectedCharacterUnequippedEquipment = (state: AppState): ItemInstance[] => {
  return getSelectedCharacterAllEquipment(state).filter((item: ItemInstance) => {
    return !item.equipped || !item.packable;
  });
}

export const getSelectedCharacterArmorAndSheilds = (state: AppState): ItemInstance[] => {
  return getSelectedCharacterAllEquipment(state).filter((item: ItemInstance) => {
    return item.itemClassification && isArmor[item.itemClassification];
  })
}

export const getSelectedCharacterWeapons = (state: AppState): ItemInstance[] => {
  return getSelectedCharacterAllEquipment(state).filter((item: ItemInstance) => {
    return item.itemClassification && isWeapon[item.itemClassification];
  })
}

export const getSelectedCharacterActiveWornArmor = (state: AppState): ItemInstance => {
  return getSelectedCharacterArmorAndSheilds(state).filter((item: ItemInstance) => {
    return item.equipped && item.itemClassification && isWornArmor[item.itemClassification];
  })[0] ?? null;
}

export const getSelectedCharacterShields = (state: AppState): ItemInstance[] => {
  return getSelectedCharacterAllEquipment(state).filter((item: ItemInstance) => {
    return item.itemClassification && isShield[item.itemClassification];
  });
}

export const getSelectedCharacterActiveShield = (state: AppState): ItemInstance => {
  return getSelectedCharacterShields(state).filter((item: ItemInstance) => {
    return item.equipped;
  })[0] ?? null;
}

export const getSelectedCharacterActiveArmorClass = (state: AppState): ArmorWeight | null => 
  getSelectedCharacterActiveWornArmor(state)?.armor?.class ?? null;

export const getSelectedCharacterArmorSpeed = (state: AppState): string => {
  const ActiveArmor = getSelectedCharacterActiveArmorClass(state);
  return ActiveArmor ? wornArmorSpeed[ActiveArmor] : wornArmorSpeed[ArmorWeight.none];
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

export const getSelectedCharacterSkills = (state: AppState): CharacterSkills => 
  getSelectedCharacter(state)?.skills ?? {};

export const getSelectedCharacterXp = (state: AppState): number => 
  getSelectedCharacter(state)?.xp ?? 0;

export const getSelectedCharacterTotalArmor = (state: AppState): number => {
  const baseArmor = getSelectedCharacterActiveWornArmor(state)?.armor?.base ?? 0;
  const sheild = getSelectedCharacterActiveShield(state)?.armor?.bonus ?? 0;
  return baseArmor + sheild;
}
  
