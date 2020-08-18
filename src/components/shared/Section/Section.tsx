import * as React from 'react';
import { css } from 'emotion';
import { grayScoopBackground } from 'src/sharedStyles/grayScoopTheme';

const sectionCss = css`
  ${grayScoopBackground}
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  
`;

export const Section: React.FC = ({ children }) => {
  return (
    <section className={sectionCss}>
      { children }
    </section>
  );
}
