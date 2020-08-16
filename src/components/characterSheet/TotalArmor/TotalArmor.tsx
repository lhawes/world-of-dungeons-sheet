import * as React from 'react';
import { useContext, useMemo } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterTotalArmor } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { normalizeData } from 'src/utils/normalizeData';

export interface TotalArmorProps {
  [key: string]: any;
}

export const TotalArmor: React.FC<TotalArmorProps> = ({}) => {
  const state = useContext(StateContext);
  const totalArmor = useMemo(() => getSelectedCharacterTotalArmor(state), [state[CharacterStateKey]]);

  return (<div>
    TotalArmor: { normalizeData(totalArmor) }
  </div>);
}