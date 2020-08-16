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

export interface CharacterSheetPageProps {
  [key: string]: any
}

export const CharacterSheetPage = ({}: CharacterSheetPageProps) => {
  return (
    <>
      <Section>
      <CharacterName/><CharacterClass /><Level /><SheetController />
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