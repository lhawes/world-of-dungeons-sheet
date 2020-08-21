/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { whiteScoopBackground } from 'src/sharedStyles/whiteScoopTheme';
import { whiteScoopOffset, grayScoopBackground } from 'src/sharedStyles/grayScoopTheme';
import { Section } from 'src/components/shared/Section/Section';
import { Block } from 'src/components/shared/Block/Block';
import { ArmorSpeed } from '../ArmorSpeed/ArmorSpeed';
import { TotalArmor } from '../TotalArmor/TotalArmor';
import { HitDice } from '../HitDice/HitDice';
import { HitPoints } from '../HitPoints/HitPoints';

const CharacterArmorSpeedLayout = css({
  gridColumn: 1,
  gridRow: 1,
}, whiteScoopBackground);

const CharacterTotalArmorLayout = css({
  gridColumn: 3,
  gridRow: 1,
}, whiteScoopBackground);

const CharacterHitDiceLayout = css({
  gridColumn: 5,
  gridRow: 1,
}, whiteScoopBackground);

const CharacterHitPointsLayout = css({
  gridColumn: 7,
  gridRow: 1,
}, whiteScoopBackground);

const GridLayout = css({
  gridTemplateColumns: `4fr ${whiteScoopOffset} 1fr ${whiteScoopOffset} 1fr ${whiteScoopOffset} 1fr`,
  gridTemplateRows: '1fr',
}, grayScoopBackground);

export const CharacterHealthLayout: React.FC = () => {
  return (
    <Section layout={GridLayout}>
      <Block size={1} themedCss={CharacterArmorSpeedLayout}>
        <ArmorSpeed />
      </Block>
      <Block size={1} themedCss={CharacterTotalArmorLayout}>
        <TotalArmor />
      </Block>
      <Block size={1} themedCss={CharacterHitDiceLayout}>
        <HitDice />
      </Block>
      <Block size={1} themedCss={CharacterHitPointsLayout}>
        <HitPoints />
      </Block>
    </Section>
  );
}