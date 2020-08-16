import * as React from 'react';
import { useMemo, useContext } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterHitPoints } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { Block } from 'src/components/shared/Block/Block';

export interface HitPointsProps {
  [key: string]: any;
}

export const HitPoints: React.FC<HitPointsProps> = ({}) => {
  const state = useContext(StateContext);
  const hitPoints = useMemo(() => getSelectedCharacterHitPoints(state), [state[CharacterStateKey]]);

  return (<Block>
    HitPoints: { hitPoints }
  </Block>);
}