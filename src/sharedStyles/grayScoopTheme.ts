import topLeftSvg from '../static/svg/white-top-left-scoop.svg';
import topRightSvg from '../static/svg/white-top-right-scoop.svg';
import bottomLeftSvg from '../static/svg/white-bottom-left-scoop.svg';
import bottomRightSvg from '../static/svg/white-bottom-right-scoop.svg';
import { css } from '@emotion/core';

export const backgroundGray = '#c8c8c8';
export const whiteScoopSize = '10px';
export const whiteScoopOffset = '7px';

export const grayScoopBackground = css({
  backgroundImage: `url(${topLeftSvg}), url(${topRightSvg}), url(${bottomLeftSvg}), url(${bottomRightSvg})`,
  backgroundColor: `${backgroundGray}`,
  backgroundSize: `${whiteScoopSize} ${whiteScoopSize}`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '0 0, 100% 0, 0 100%, 100% 100%',
  padding: `${whiteScoopOffset}`,
});