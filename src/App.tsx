import * as React from 'react';
import './App.css';
import { DebugComponent } from './components/shared/debug';
import { UserData } from './state/data/exampleUser'
import { CharacterSheet } from './pages/CharacterSheet';
import { useReducer } from 'react';
import { rootReducer } from './state/rootReducer';
import { rootInitialState } from './state/rootInitialState';

const normalizeData = (data: any) => JSON.stringify(data, null, 4);

const defaultDispatch = (action: {type:string}) => {
  throw new Error('Context consumer provided with default dispatch ' + action.type)
  return;
}

export const StateContext = React.createContext(rootInitialState);
export const DispatchContext = React.createContext(defaultDispatch);

const App = () => {
  const [state, dispatch] = useReducer(rootReducer, rootInitialState);
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
          <br/>
          <DebugComponent>
            {normalizeData(UserData)}
          </DebugComponent>
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
