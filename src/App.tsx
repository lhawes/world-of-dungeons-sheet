import * as React from 'react';
import './App.css';
import { baseItems } from './state/data/baseItems'
import { DebugComponent } from './state/debug';

class App extends React.Component {
  public render() {
    const baseItem = JSON.stringify(baseItems[0], null, 4)
    const instance = JSON.stringify(baseItems[0].createItemInstance(), null, 4)
    return (
      <div className="App">
        <DebugComponent>
          {baseItem}
        </DebugComponent>
        <br/>
        <DebugComponent>
          {instance}
        </DebugComponent>

      </div>
    );
  }
}

export default App;
