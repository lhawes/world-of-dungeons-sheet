import * as React from 'react';
import './App.css';
import { baseItems } from './state/data/baseItems'
import { DebugComponent } from './state/debug';
import { CharacterName } from './components/characterSheet/CharacterName/CharacterName';
import { CharacterClass } from './components/characterSheet/CharacterClass/CharacterClass';
import { Level } from './components/characterSheet/Level/Level';
import { Attributes } from './components/characterSheet/Attributes/Attributes';
import { Skills } from './components/characterSheet/Skills/Skills';
import { Abilities } from './components/characterSheet/Abilities/Abilities';
import { Weapons } from './components/characterSheet/Weapons/Weapons';
import { Equipment } from './components/characterSheet/Equipment/Equipment';
import { ArmorSpeed } from './components/characterSheet/ArmorSpeed/ArmorSpeed';
import { HitDice } from './components/characterSheet/HitDice/HitDice';
import { HitPoints } from './components/characterSheet/HitPoints/HitPoints';
import { Notes } from './components/characterSheet/Notes/Notes';
import { Coin } from './components/characterSheet/Coin/Coin';
import { CharacterXp } from './components/characterSheet/Xp/Xp';
import { Advancement } from './components/characterSheet/Advancement/Advancement';
import { SheetController } from './components/characterSheet/SheetController/SheetController';


class App extends React.Component {
  public render() {
    const baseItem = JSON.stringify(baseItems[0], null, 4)
    const instance = JSON.stringify(baseItems[0].createItemInstance(), null, 4)
    return (
      <div className="App">
      <h3>World of Dungeons</h3>
      <br/>
      <section>
        <CharacterName/><CharacterClass /><Level /><SheetController />
      </section>
      <section>
        <Attributes/><Skills /><Abilities />
      </section>
      <section>
        <Weapons/><Equipment />
      </section>
      <section>
        <ArmorSpeed/><HitDice /><HitPoints />
      </section>
      <section>
        <Notes />
      </section>
      <section>
        <Coin /><CharacterXp /><Advancement />
      </section>

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
