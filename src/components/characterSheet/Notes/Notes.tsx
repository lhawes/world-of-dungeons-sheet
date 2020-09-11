import * as React from 'react';
import { useContext, useMemo } from 'react';
import { StateContext, DispatchContext } from 'src/App';
import { getSelectedCharacterNotes } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { setCharacterNotesAction } from 'src/state/characters/characterActions';
import { SimpleTextArea } from 'src/components/shared/SimpleTextArea/SimpleTextArea';

export interface NotesProps {
  [key: string]: any;
}

export const Notes: React.FC<NotesProps> = ({}) => {
  const state = useContext(StateContext);
  const characterNotes = useMemo(() => getSelectedCharacterNotes(state), [state[CharacterStateKey]]);

  const dispatch = useContext(DispatchContext);
  const setCharacterNotes = React.useCallback((notes: string) => dispatch(setCharacterNotesAction(notes)), [setCharacterNotesAction, dispatch]);

  const notesValidator = React.useCallback((v: string) => {
     return v.length < 500;
  }, []);



  return (<>
      <div>
        Notes
      </div>
      <div>
        { <SimpleTextArea
            fieldName={'notes'}
            value={characterNotes}
            defaultValue={''}
            validator={notesValidator}
            onChange={setCharacterNotes}
        /> }
      </div>
  </>);
}