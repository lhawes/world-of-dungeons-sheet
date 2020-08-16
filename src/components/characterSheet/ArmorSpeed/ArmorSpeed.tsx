import * as React from 'react';
import { useContext, useMemo } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterArmorSpeed } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { Block } from 'src/components/shared/Block/Block';

export interface ArmorSpeedProps {
  [key: string]: any;
}

export const ArmorSpeed: React.FC<ArmorSpeedProps> = ({}) => {
  const state = useContext(StateContext);
  const speed = useMemo(() => getSelectedCharacterArmorSpeed(state), [state[CharacterStateKey]]);

  return (<Block>
    ArmorSpeed: { speed }
  </Block>);
}