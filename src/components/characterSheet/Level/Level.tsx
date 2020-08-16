import * as React from 'react';
import { useContext, useMemo } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterLevel } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';

export interface LevelProps {
  [key: string]: any;
}

export const Level: React.FC<LevelProps> = ({}) => {
  const state = useContext(StateContext);
  const level = useMemo(() => getSelectedCharacterLevel(state), [state[CharacterStateKey]]);

  return (<div>
    Level: {level}
  </div>);
}