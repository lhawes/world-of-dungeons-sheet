import * as React from 'react';
import { Attribute } from 'src/state/models/Character';
import { useMemo, useContext } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterLevel, getSelectedCharacterAttributes } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';

export interface HitDiceProps {
  [key: string]: any;
}

export const HitDice: React.FC<HitDiceProps> = ({}) => {
  const state = useContext(StateContext);
  const level = useMemo(() => getSelectedCharacterLevel(state), [state[CharacterStateKey]]);
  const attributes = useMemo(() => getSelectedCharacterAttributes(state), [state[CharacterStateKey]]);
  const CON = attributes ? attributes[Attribute.CON] : 0;

  return (<div>
    HitDice: { `${level + CON}d6` }
  </div>);
}