/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { whiteScoopBackground } from 'src/sharedStyles/whiteScoopTheme';
import { whiteScoopOffset, grayScoopBackground } from 'src/sharedStyles/grayScoopTheme';
import { Section } from 'src/components/shared/Section/Section';
import { Block } from 'src/components/shared/Block/Block';
import { Weapons } from '../Weapons/Weapons';
import { PackEquipment } from '../Equipment/Equipment';

const CharacterWeaponsLayout = css({
  gridColumn: 1,
  gridRow: 1,
}, whiteScoopBackground);

const CharacterPackLayout = css({
  gridColumn: 3,
  gridRow: 1,
}, whiteScoopBackground);

const GridLayout = css({
  gridTemplateColumns: `5fr ${whiteScoopOffset} 2fr ${whiteScoopOffset} 3fr`,
  gridTemplateRows: '1fr',
}, grayScoopBackground);

export const CharacterEquipmentLayout: React.FC = () => {
  return (
    <Section layout={GridLayout}>
    <Block size={1} themedCss={CharacterWeaponsLayout}>
      <Weapons />
    </Block>
    <Block size={1} themedCss={CharacterPackLayout}>
      <PackEquipment />
    </Block>
  </Section>
  );
}