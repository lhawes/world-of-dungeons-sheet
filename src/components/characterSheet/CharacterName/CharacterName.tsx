import * as React from 'react';
import { StateContext, DispatchContext } from 'src/App';
import { useContext, useMemo, useCallback } from 'react';
import { getSelectedCharacterName } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { SimpleInput } from 'src/components/shared/SimpleInput/SimpleInput';
import { setCharacterNameAction } from 'src/state/characters/characterActions';


export interface CharacterNameProps {
  [key: string]: any;
}

export const CharacterName: React.FC<CharacterNameProps> = ({}) => {
  const state = useContext(StateContext);
  const characterName = useMemo(() => getSelectedCharacterName(state), [state[CharacterStateKey]])
  
  const dispatch = useContext(DispatchContext);
  const setCharacterName = useCallback((name: any) => dispatch(setCharacterNameAction(name)), [setCharacterNameAction, dispatch]);

  const nameValidator = useCallback((v: string) => {
     return v.length < 10;
  }, []);

  return (
    <>
      <div>
        Character Name
      </div>
      <div>
        { <SimpleInput
            fieldName={'name'}
            value={characterName}
            defaultValue={''}
            validator={nameValidator}
            onChange={setCharacterName}
        /> }
      </div>
    </>
  );
}