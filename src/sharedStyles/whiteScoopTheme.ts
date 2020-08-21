import topLeftSvg from '../static/svg/gray-top-left-scoop.svg';
import topRightSvg from '../static/svg/gray-top-right-scoop.svg';
import bottomLeftSvg from '../static/svg/gray-bottom-left-scoop.svg';
import bottomRightSvg from '../static/svg/gray-bottom-right-scoop.svg';
import { css } from '@emotion/core';

export const backgroundWhite = 'white';
export const grayScoopSize = '10px';
export const grayScoopOffset = '10px';

export const whiteScoopBackground = css({
  backgroundImage: `url(${topLeftSvg}), url(${topRightSvg}), url(${bottomLeftSvg}), url(${bottomRightSvg})`,
  backgroundColor: `${backgroundWhite}`,
  backgroundSize: `${grayScoopSize} ${grayScoopSize}`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '0 0, 100% 0, 0 100%, 100% 100%',
  padding: `${grayScoopOffset}`,
})