/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { whiteScoopBackground } from 'src/sharedStyles/whiteScoopTheme';
import { whiteScoopOffset, grayScoopBackground } from 'src/sharedStyles/grayScoopTheme';
import { Section } from 'src/components/shared/Section/Section';

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

const gridLayout = css({
  gridTemplateColumns: `4fr ${whiteScoopOffset} 1fr ${whiteScoopOffset} 1fr ${whiteScoopOffset} 1fr`,
  gridTemplateRows: '1fr',
}, grayScoopBackground);

export const CharacterHealthLayout: React.FC = () => {
  return (
    <Section layout={gridLayout}>
      <div css={CharacterArmorSpeedLayout}>
        <ArmorSpeed />
      </div>
      <div css={CharacterTotalArmorLayout}>
        <TotalArmor />
      </div>
      <div css={CharacterHitDiceLayout}>
        <HitDice />
      </div>
      <div css={CharacterHitPointsLayout}>
        <HitPoints />
      </div>
    </Section>
  );
}