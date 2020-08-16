import * as React from 'react';
import { CharacterName } from '../components/characterSheet/CharacterName/CharacterName';
import { CharacterClass } from '../components/characterSheet/CharacterClass/CharacterClass';
import { Level } from '../components/characterSheet/Level/Level';
import { Attributes } from '../components/characterSheet/Attributes/Attributes';
import { Skills } from '../components/characterSheet/Skills/Skills';
import { Abilities } from '../components/characterSheet/Abilities/Abilities';
import { Weapons } from '../components/characterSheet/Weapons/Weapons';
import { Equipment } from '../components/characterSheet/Equipment/Equipment';
import { ArmorSpeed } from '../components/characterSheet/ArmorSpeed/ArmorSpeed';
import { HitDice } from '../components/characterSheet/HitDice/HitDice';
import { HitPoints } from '../components/characterSheet/HitPoints/HitPoints';
import { Notes } from '../components/characterSheet/Notes/Notes';
import { Coin } from '../components/characterSheet/Coin/Coin';
import { CharacterXp } from '../components/characterSheet/Xp/Xp';
import { Advancement } from '../components/characterSheet/Advancement/Advancement';
import { SheetController } from '../components/characterSheet/SheetController/SheetController';

export interface CharacterSheetProps {
  [key: string]: any
}

export const CharacterSheet = ({}: CharacterSheetProps) => {
  return (
    <>
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
      <section>
        Total Armor value TODO
        Equipment not in pack TODO
        Abilities map TODO
        Level advancement map TODO
      </section>
    </>
  );
}