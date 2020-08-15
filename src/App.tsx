import * as React from 'react';
import './App.css';
import { DebugComponent } from './state/debug';

import { baseCharacter } from './state/data/baseCharacter';
import { CharacterSheet } from './pages/CharacterSheet';

class App extends React.Component {
  public render() {
    const normalizeData = (data: any) => JSON.stringify(data, null, 4);
    return (
      <div className="App">
        <h3>World of Dungeons</h3>
        <br/>
        <CharacterSheet />
        <DebugComponent>
          {normalizeData(baseCharacter)}
        </DebugComponent>
      </div>
    );
  }
}

export default App;
