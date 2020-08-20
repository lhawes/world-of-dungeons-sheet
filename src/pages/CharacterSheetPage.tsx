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
import { TotalArmor } from 'src/components/characterSheet/TotalArmor/TotalArmor';
import { UnequippedEquipment } from 'src/components/characterSheet/UnequippedEquipment/UnequippedEquipment';
import { Section } from 'src/components/shared/Section/Section';
import { Block } from 'src/components/shared/Block/Block';
import { whiteScoopBackground } from 'src/sharedStyles/whiteScoopTheme';

export interface CharacterSheetPageProps {
  [key: string]: any
}

export const CharacterSheetPage = ({}: CharacterSheetPageProps) => {
  return (
    <>
      <Section>
        <Block size={5} themedCss={whiteScoopBackground}>
          <CharacterName/>
        </Block>
        <Block size={3} themedCss={whiteScoopBackground}>
          <CharacterClass />
        </Block>
        <Block size={'50px'} themedCss={whiteScoopBackground}>
          <Level />
        </Block>
      </Section>
      <Section>
        <Block size={2}>
          <Attributes/>
        </Block>
        <Block size={1}>
          <Skills />
        </Block>
        <Block size={1}>
          <Abilities />
        </Block>
      </Section>
      <Section>
        <Block size={1} themedCss={whiteScoopBackground}>
          <Weapons />
        </Block>
        <Block size={1} themedCss={whiteScoopBackground}>
          <PackEquipment />
        </Block>
      </Section>
      <Section>
        <Block size={1} themedCss={whiteScoopBackground}>
          <ArmorSpeed />
        </Block>
        <Block size={1} themedCss={whiteScoopBackground}>
          <TotalArmor />
        </Block>
        <Block size={1} themedCss={whiteScoopBackground}>
          <HitDice />
        </Block>
        <Block size={1} themedCss={whiteScoopBackground}>
          <HitPoints />
        </Block>
      </Section>
      <Section>
        <Block size={1} themedCss={whiteScoopBackground}>
          <Notes />
        </Block>
      </Section>
      <Section>
        <Block size={1} themedCss={whiteScoopBackground}>
          <Coin />
        </Block>
        <Block size={1} themedCss={whiteScoopBackground}>
          <CharacterXp />
        </Block>
        <Block size={1} themedCss={whiteScoopBackground}>
          <Advancement />
        </Block>
      </Section>
      <Section>
        <Block size={1} themedCss={whiteScoopBackground}>
          <UnequippedEquipment />
        </Block>
      </Section>
    </>
  );
}