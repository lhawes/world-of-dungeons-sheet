import * as React from 'react';
import { useContext, useMemo } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterNotes } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';

export interface NotesProps {
  [key: string]: any;
}

export const Notes: React.FC<NotesProps> = ({}) => {
  const state = useContext(StateContext);
  const notes = useMemo(() => getSelectedCharacterNotes(state), [state[CharacterStateKey]]);

  return (<>
    Notes: "{notes}"
  </>);
}