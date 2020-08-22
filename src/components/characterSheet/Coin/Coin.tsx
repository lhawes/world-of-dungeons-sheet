import * as React from 'react';
import { useMemo, useContext } from 'react';
import { StateContext, DispatchContext } from 'src/App';
import { getSelectedCharacterCoin } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { setCharacterCoinAction } from 'src/state/characters/characterActions';
import { SimpleInput } from 'src/components/shared/SimpleInput/SimpleInput';
import { numberValidator } from 'src/utils/normalizers';

export interface CoinProps {
  [key: string]: any;
}

export const Coin: React.FC<CoinProps> = ({}) => {
  const state = useContext(StateContext);
  const silver = useMemo(() => getSelectedCharacterCoin(state), [state[CharacterStateKey]]);

  const dispatch = useContext(DispatchContext);
  const setCharacterCoin = React.useCallback((coins: any) => dispatch(setCharacterCoinAction(coins)), [setCharacterCoinAction, dispatch]);

  return (
    <>
      <div>
        Coin: 
      </div>
      <div>
        { <SimpleInput
            fieldName={'coin'}
            value={silver}
            defaultValue={'0'}
            validator={numberValidator}
            onChange={setCharacterCoin}
        /> }
      </div>
  </>
  );
}