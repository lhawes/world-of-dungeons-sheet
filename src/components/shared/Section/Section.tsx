import * as React from 'react';
import { css } from 'emotion';
import topLeftSvg from '../../../static/svg/top-left-scoop.svg';
import topRightSvg from '../../../static/svg/top-right-scoop.svg';
import bottomLeftSvg from '../../../static/svg/bottom-left-scoop.svg';
import bottomRightSvg from '../../../static/svg/bottom-right-scoop.svg';


const sectionCss = css`
  margin: 0;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-image: url(${topLeftSvg}), url(${topRightSvg}), url(${bottomLeftSvg}), url(${bottomRightSvg});
  background-color: #c8c8c8;
    background-size: 10px 10px;
    background-repeat: no-repeat;
    background-position: 0 0, 100% 0, 0 100%, 100% 100%;
`;

export const Section: React.FC = ({ children }) => {
  return (
    <section className={sectionCss}>
      { children }
    </section>
  );
}
