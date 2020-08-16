import * as React from 'react';
import { useContext, useMemo } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterTotalArmor } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { normalizeData } from 'src/utils/normalizeData';
import { Block } from 'src/components/shared/Block/Block';

export interface TotalArmorProps {
  [key: string]: any;
}

export const TotalArmor: React.FC<TotalArmorProps> = ({}) => {
  const state = useContext(StateContext);
  const totalArmor = useMemo(() => getSelectedCharacterTotalArmor(state), [state[CharacterStateKey]]);

  return (<Block>
    TotalArmor: { normalizeData(totalArmor) }
  </Block>);
}