import * as React from 'react';
import { StateContext } from 'src/App';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { useContext, useMemo } from 'react';
import { getSelectedCharacterAbilities } from 'src/state/characters/characterSelectors';
import { normalizeData } from 'src/utils/normalizeData';
import { Block } from 'src/components/shared/Block/Block';

export interface AbilitiesProps {
  [key: string]: any;
}

export const Abilities: React.FC<AbilitiesProps> = ({}) => {
  const state = useContext(StateContext);
  const specialAbilities = useMemo(() => getSelectedCharacterAbilities(state), [state[CharacterStateKey]]);

  const activeAbilities = Object
  .keys(specialAbilities)
  .filter((abilityKey: string): boolean => {
    return specialAbilities[abilityKey];
  });

  return (<Block>
    Special Abilities: { normalizeData(activeAbilities) }
  </Block>);
}