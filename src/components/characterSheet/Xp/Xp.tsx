import * as React from 'react';
import { useContext, useMemo } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterXp } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { Block } from 'src/components/shared/Block/Block';

export interface CharacterXpProps {
  [key: string]: any;
}

export const CharacterXp: React.FC<CharacterXpProps> = ({}) => {
  const state = useContext(StateContext);
  const xp = useMemo(() => getSelectedCharacterXp(state), [state[CharacterStateKey]]);

  return (<Block>
    Character XP: { xp }
  </Block>);
}