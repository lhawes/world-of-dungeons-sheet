/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { whiteScoopBackground } from 'src/sharedStyles/whiteScoopTheme';
import { whiteScoopOffset, grayScoopBackground } from 'src/sharedStyles/grayScoopTheme';
import { Section } from 'src/components/shared/Section/Section';
import { Block } from 'src/components/shared/Block/Block';
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
      <Block themedCss={CharacterCoinLayout}>
        <Coin />
      </Block>
      <Block themedCss={CharacterXpLayout}>
        <CharacterXp />
      </Block>
      <Block themedCss={CharacterAdvancementLayout}>
        <Advancement />
      </Block>
    </Section>
  );
}