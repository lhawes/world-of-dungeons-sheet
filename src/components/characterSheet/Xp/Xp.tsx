import * as React from 'react';
import { useContext, useMemo } from 'react';
import { StateContext, DispatchContext } from 'src/App';
import { getSelectedCharacterXp } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { setCharacterXpAction } from 'src/state/characters/characterActions';
import { SimpleInput } from 'src/components/shared/SimpleInput/SimpleInput';
import { numberValidator } from 'src/utils/normalizers';

export interface CharacterXpProps {
  [key: string]: any;
}

export const CharacterXp: React.FC<CharacterXpProps> = ({}) => {
  const state = useContext(StateContext);
  const xp = useMemo(() => getSelectedCharacterXp(state), [state[CharacterStateKey]]);

  const dispatch = useContext(DispatchContext);
  const setCharacterXp = React.useCallback((name: any) => dispatch(setCharacterXpAction(name)), [setCharacterXpAction, dispatch]);
  
  return (
    <>
      <div>
        XP: 
      </div>
      <div>
        { <SimpleInput
            fieldName={'xp'}
            value={xp}
            defaultValue={'0'}
            validator={numberValidator}
            onChange={setCharacterXp}
        /> }
      </div>
  </>
  );
}