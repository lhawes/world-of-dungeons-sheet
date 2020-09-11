import * as React from 'react';
import './App.css';
import { UserData } from './state/data/exampleUser'
import { useReducer, useEffect } from 'react';
import { rootReducer } from './state/rootReducer';
import { rootInitialState } from './state/rootInitialState';
import { addCharacterAction } from './state/characters/characterActions';
import { defaultDispatch } from './utils/defaultDispatch';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { Navigation } from './components/navigation/navigation';
import { pages } from './pages/pageRouting';
// import { DebugComponent } from './components/shared/debug';
// import { normalizeData } from './utils/normalizers';

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
        <HashRouter>
          <Navigation pages={pages} />
          <Switch>
            { pages.map(({ component, route, name }) => (
                <Route exact={true} path={route} key={`${name}-route`} component={component}/>
            )) }
            <Route path='*'>
              <p>Nothing here</p>
            </Route>
          </Switch>
        </HashRouter>
        {/* <DebugComponent>
          {normalizeData(state)}
        </DebugComponent> */}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
