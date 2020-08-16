import * as React from 'react';
import './App.css';
import { DebugComponent } from './components/shared/debug';
import { UserData } from './state/data/exampleUser'
import { CharacterSheet } from './pages/CharacterSheet';
import { useReducer, useEffect } from 'react';
import { rootReducer } from './state/rootReducer';
import { rootInitialState } from './state/rootInitialState';
import { addCharacterAction } from './state/characters/characterActions';
import { defaultDispatch } from './utils/defaultDispatch';
import { normalizeData } from './utils/normalizeData';

export const StateContext = React.createContext(rootInitialState);
export const DispatchContext = React.createContext(defaultDispatch);

const App = () => {
  const [state, dispatch] = useReducer(rootReducer, rootInitialState);

  useEffect(() => {
    // import or create the initial user state here.
    dispatch(addCharacterAction(UserData.characters[0]))
  },[dispatch, addCharacterAction, UserData]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className="App">
          <h3>World of Dungeons</h3>
          <br/>
          <CharacterSheet />
          <DebugComponent>
            {normalizeData(state)}
          </DebugComponent>
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
