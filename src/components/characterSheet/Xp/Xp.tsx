import * as React from 'react';
import { useContext, useMemo } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterXp } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';

export interface CharacterXpProps {
  [key: string]: any;
}

export const CharacterXp = ({}: CharacterXpProps) => {
  const state = useContext(StateContext);
  const xp = useMemo(() => getSelectedCharacterXp(state), [state[CharacterStateKey]]);

  return (<div>
    Character XP: { xp }
  </div>);
}