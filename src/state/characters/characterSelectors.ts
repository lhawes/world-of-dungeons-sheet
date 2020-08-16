import { AppState } from '../rootInitialState'
import { CharacterStateKey, CharacterReducerState } from './characterReducer';
import { CharacterType } from '../models/Character';


export const getCharacterSection = (state: AppState): CharacterReducerState => state[CharacterStateKey];

export const getCharacterList = (state: AppState) => getCharacterSection(state).characterList;

export const getSelectedCharacterIndex = (state: AppState): number => getCharacterSection(state).selectedCharacter;

export const getSelectedCharacter = (state: AppState): CharacterType => {
  const selectedCharacter = getSelectedCharacterIndex(state);
  return getCharacterList(state)[selectedCharacter];
}

export const getSelectedCharacterName = (state: AppState): string => getSelectedCharacter(state)?.name ?? null;
