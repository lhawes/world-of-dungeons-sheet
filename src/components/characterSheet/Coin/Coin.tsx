import * as React from 'react';
import { useMemo, useContext } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterCoin } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';

export interface CoinProps {
  [key: string]: any;
}

export const Coin: React.FC<CoinProps> = ({}) => {
  const state = useContext(StateContext);
  const silver = useMemo(() => getSelectedCharacterCoin(state), [state[CharacterStateKey]]);

  return (<>
    Money: {silver}s
  </>);
}