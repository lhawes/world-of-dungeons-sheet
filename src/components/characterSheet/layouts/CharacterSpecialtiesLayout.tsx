/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { whiteScoopBackground } from 'src/sharedStyles/whiteScoopTheme';
import { whiteScoopOffset, grayScoopBackground } from 'src/sharedStyles/grayScoopTheme';
import { Section } from 'src/components/shared/Section/Section';
import * as React from 'react';

import { CharacterAttributes } from '../CharacterAttributes/CharacterAttributes';
import { CharacterAbilities } from '../CharacterAbilities/CharacterAbilities';
import { CharacterSkills } from '../CharacterSkills/CharacterSkills';

const CharacterAttributesLayout = css({
  gridColumn: 1,
  gridRow: 1,
}, whiteScoopBackground);

const CharacterSkillsLayout = css({
  gridColumn: 3,
  gridRow: 1,
}, whiteScoopBackground);

const CharacterAbilitiesLayout = css({
  gridColumn: 5,
  gridRow: 1,
}, whiteScoopBackground);

const gridLayout = css({
  gridTemplateColumns: `3fr ${whiteScoopOffset} 1fr ${whiteScoopOffset} 2fr`,
  gridTemplateRows: '1fr',
}, grayScoopBackground);

export const CharacterSpecialtiesLayout: React.FC = () => {

  return (
    <Section layout={gridLayout}>
      <div css={CharacterAttributesLayout}>
        <CharacterAttributes/>
      </div>
      <div css={CharacterSkillsLayout}>
        <CharacterSkills />
      </div>
      <div css={CharacterAbilitiesLayout}>
        <CharacterAbilities />
      </div>
    </Section>
  );
}