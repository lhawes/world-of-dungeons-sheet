/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { whiteScoopBackground } from 'src/sharedStyles/whiteScoopTheme';
import { whiteScoopOffset, grayScoopBackground } from 'src/sharedStyles/grayScoopTheme';
import { Section } from 'src/components/shared/Section/Section';

import { Coin } from '../Coin/Coin';
import { CharacterXp } from '../Xp/Xp';
import { Advancement } from '../Advancement/Advancement';

const CharacterCoinLayout = css({
  gridColumn: 1,
  gridRow: 1,
}, whiteScoopBackground);

const CharacterXpLayout = css({
  gridColumn: 3,
  gridRow: 1,
}, whiteScoopBackground);

const CharacterAdvancementLayout = css({
  gridColumn: 5,
  gridRow: 1,
}, whiteScoopBackground);

const gridLayout = css({
  gridTemplateColumns: `3fr ${whiteScoopOffset} 2fr ${whiteScoopOffset} 2fr`,
  gridTemplateRows: '1fr',
}, grayScoopBackground);

export const CharacterCoinXpLayout: React.FC = () => {
  return (
    <Section layout={gridLayout}>
      <div css={CharacterCoinLayout}>
        <Coin />
      </div>
      <div css={CharacterXpLayout}>
        <CharacterXp />
      </div>
      <div css={CharacterAdvancementLayout}>
        <Advancement />
      </div>
    </Section>
  );
}