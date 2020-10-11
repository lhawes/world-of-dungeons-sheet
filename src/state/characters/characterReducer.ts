import { AnyAction } from "src/types/anyAction";
import { CharacterType } from '../models/Character';
import { initialState } from './inititialState';
import { characterActionTypes } from './actionTypes';
import { baseItems } from '../data/baseItems';

const {
  ADD_CHARACTER,
  SET_CHARACTER_PROPERTY,
  SET_CHARACTER_ATTRIBUTE,
  SET_CHARACTER_SKILL,
  SET_CHARACTER_ABILITY,
  ADD_ITEM_TO_CHARACTER,
} = characterActionTypes;

export const CharacterStateKey: string = 'characters';

export interface CharacterReducerState {
  selectedCharacter: number;
  characterList: CharacterType[];
}

export const charactersReducer = (state: CharacterReducerState = initialState, action: AnyAction) => {
  const newState: CharacterReducerState = JSON.parse(JSON.stringify(state));

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

    case SET_CHARACTER_SKILL:
      const { skillName } = action.payload;
      newState.characterList[state.selectedCharacter].skills[skillName] = !!action.payload.active;
      return newState;

    case SET_CHARACTER_ABILITY:
      const { abilityName } = action.payload;
      newState.characterList[state.selectedCharacter].specialAbilities[abilityName] = !!action.payload.active;
      return newState;

    case ADD_ITEM_TO_CHARACTER:
      const { id } = action.payload;
      const itemToAdd = baseItems.find((item) => item.uuid === id);

      if (itemToAdd) {
        newState.characterList[state.selectedCharacter].equipment.push(
          itemToAdd.createItemInstance()
        )
        return newState;
      } else {
        console.log(`no item with uuid ${id} found in base items`);
      }

    default:
      return state;
  }
}