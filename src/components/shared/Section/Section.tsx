import * as React from 'react';
import { css } from 'emotion';
import topLeftSvg from '../../../static/svg/white-top-left-scoop.svg';
import topRightSvg from '../../../static/svg/white-top-right-scoop.svg';
import bottomLeftSvg from '../../../static/svg/white-bottom-left-scoop.svg';
import bottomRightSvg from '../../../static/svg/white-bottom-right-scoop.svg';

const backgroundGray = '#c8c8c8';
const whiteScoopSize = '10px';
const whiteScoopOffset = '7px';

const whiteCornerScoopsCss = css`
  background-image: url(${topLeftSvg}), url(${topRightSvg}), url(${bottomLeftSvg}), url(${bottomRightSvg});
  background-color: ${backgroundGray};
  background-size: ${whiteScoopSize} ${whiteScoopSize};
  background-repeat: no-repeat;
  background-position: 0 0, 100% 0, 0 100%, 100% 100%;
  padding: ${whiteScoopOffset};
`;

const sectionCss = css`
  ${whiteCornerScoopsCss};
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
