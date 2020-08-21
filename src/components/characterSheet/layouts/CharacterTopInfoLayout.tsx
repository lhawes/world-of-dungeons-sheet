/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { whiteScoopBackground } from 'src/sharedStyles/whiteScoopTheme';
import { whiteScoopOffset, grayScoopBackground } from 'src/sharedStyles/grayScoopTheme';
import { Section } from 'src/components/shared/Section/Section';

import { CharacterName } from '../CharacterName/CharacterName';
import { CharacterClass } from '../CharacterClass/CharacterClass';
import { Level } from '../Level/Level';

const CharacterNameLayout = css({
  gridColumn: 1,
  gridRow: 1,
}, whiteScoopBackground);

const CharacterClassLayout = css({
  gridColumn: 3,
  gridRow: 1,
}, whiteScoopBackground);

const CharacterLevelLayout = css({
  gridColumn: 5,
  gridRow: 1,
}, whiteScoopBackground);

const gridLayout = css({
  gridTemplateColumns: `5fr ${whiteScoopOffset} 3fr ${whiteScoopOffset} 1fr`,
  gridTemplateRows: '1fr',
}, grayScoopBackground);

export const CharacterTopInfoLayout: React.FC = () => {
  return (
    <Section layout={gridLayout}>
      <div css={CharacterNameLayout}>
        <CharacterName/>
      </div>
      <div css={CharacterClassLayout}>
        <CharacterClass />
      </div>
      <div css={CharacterLevelLayout}>
        <Level />
      </div>
    </Section>
  );
}