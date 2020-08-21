/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { whiteScoopBackground } from 'src/sharedStyles/whiteScoopTheme';
import { grayScoopBackground } from 'src/sharedStyles/grayScoopTheme';
import { Section } from 'src/components/shared/Section/Section';

import { Notes } from '../Notes/Notes';

const CharacterNoteLayout = css({
  gridColumn: 1,
  gridRow: 1,
}, whiteScoopBackground);

const gridLayout = css({
  gridTemplateColumns: `1fr`,
  gridTemplateRows: '1fr',
}, grayScoopBackground);

export const CharacterNotesLayout: React.FC = () => {
  return (
    <Section layout={gridLayout}>
      <div css={CharacterNoteLayout}>
        <Notes />
      </div>
    </Section>
  );
}