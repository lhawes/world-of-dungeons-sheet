import * as React from 'react';
import { CharacterName } from '../components/characterSheet/CharacterName/CharacterName';
import { CharacterClass } from '../components/characterSheet/CharacterClass/CharacterClass';
import { Level } from '../components/characterSheet/Level/Level';
import { Attributes } from '../components/characterSheet/Attributes/Attributes';
import { Skills } from '../components/characterSheet/Skills/Skills';
import { Abilities } from '../components/characterSheet/Abilities/Abilities';
import { Weapons } from '../components/characterSheet/Weapons/Weapons';
import { PackEquipment } from '../components/characterSheet/Equipment/Equipment';
import { ArmorSpeed } from '../components/characterSheet/ArmorSpeed/ArmorSpeed';
import { HitDice } from '../components/characterSheet/HitDice/HitDice';
import { HitPoints } from '../components/characterSheet/HitPoints/HitPoints';
import { Notes } from '../components/characterSheet/Notes/Notes';
import { Coin } from '../components/characterSheet/Coin/Coin';
import { CharacterXp } from '../components/characterSheet/Xp/Xp';
import { Advancement } from '../components/characterSheet/Advancement/Advancement';
import { SheetController } from '../components/characterSheet/SheetController/SheetController';
import { TotalArmor } from 'src/components/characterSheet/TotalArmor/TotalArmor';
import { UnequippedEquipment } from 'src/components/characterSheet/UnequippedEquipment/UnequippedEquipment';
import { Section } from 'src/components/shared/Section/Section';
import { Block } from 'src/components/shared/Block/Block';

export interface CharacterSheetPageProps {
  [key: string]: any
}

// should probably extract the blocks out of the 'getter' components so that I can adjust the spacing easier.
// Above is a lot better, need to extract out the styling from the Block to another component to separate
// styling from structure from data

export const CharacterSheetPage = ({}: CharacterSheetPageProps) => {
  return (
    <>
      <Section>
        <Block cssOverrides={{ flex: 5 }}>
          <CharacterName/>
        </Block>
        <Block cssOverrides={{ flex: 3 }}>
          <CharacterClass />
        </Block>
        <Block cssOverrides={{ flex: 1 }}>
          <Level />
        </Block>
        <Block cssOverrides={{ flex: 2 }}>
          <SheetController />
        </Block>
      </Section>
      <Section>
        <Attributes/><Skills /><Abilities />
      </Section>
      <Section>
        <Weapons/><PackEquipment />
      </Section>
      <Section>
        <ArmorSpeed/><HitDice /><HitPoints />
      </Section>
      <Section>
        <Notes />
      </Section>
      <Section>
        <Coin /><CharacterXp /><Advancement />
      </Section>
      <Section>
        <TotalArmor />
        <UnequippedEquipment />
      </Section>
    </>
  );
}