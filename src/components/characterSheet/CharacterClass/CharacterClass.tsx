import * as React from 'react';
import { useMemo, useContext } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterClass } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { Block } from 'src/components/shared/Block/Block';

export interface CharacterClassProps {
  [key: string]: any;
}

export const CharacterClass: React.FC<CharacterClassProps> = ({}) => {
  const state = useContext(StateContext);
  const characterClass = useMemo(() => getSelectedCharacterClass(state), [state[CharacterStateKey]]);

  return (
    <>
      <Block>
        CharacterClass:
      </Block>
      <Block>
        {characterClass}
      </Block>
    </>
  );
}