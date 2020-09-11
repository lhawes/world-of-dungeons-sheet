import * as React from 'react';
import './App.css';
import { UserData } from './state/data/exampleUser'
import { CharacterSheetPage } from './pages/CharacterSheetPage';
import { useReducer, useEffect } from 'react';
import { rootReducer } from './state/rootReducer';
import { rootInitialState } from './state/rootInitialState';
import { addCharacterAction } from './state/characters/characterActions';
import { defaultDispatch } from './utils/defaultDispatch';
// import { DebugComponent } from './components/shared/debug';
// import { normalizeData } from './utils/normalizers';

import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { Routes } from './constants/routes';
import { Navigation } from './components/navigation/navigation';

export const StateContext = React.createContext(rootInitialState);
export const DispatchContext = React.createContext(defaultDispatch);

export interface Page {
  name: string, 
  route: Routes,
  component: any,
}

const pages: Page[] = [
  {
    name: 'Character Sheet',
    route: Routes.characterSheet,
    component: CharacterSheetPage,
  }
]

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
                <Route exact={true} path={route} key={name} component={component}/>
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
