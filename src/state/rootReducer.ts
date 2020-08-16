import { charactersReducer, CharacterStateKey } from './characters/characterReducer';
import { combineReducers } from 'src/utils/combineReducers';

export const rootReducer = combineReducers({
  [CharacterStateKey]: charactersReducer
});
