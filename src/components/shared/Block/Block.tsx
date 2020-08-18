// import * as React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useMemo } from 'react';
import topLeftSvg from '../../../static/svg/gray-top-left-scoop.svg';
import topRightSvg from '../../../static/svg/gray-top-right-scoop.svg';
import bottomLeftSvg from '../../../static/svg/gray-bottom-left-scoop.svg';
import bottomRightSvg from '../../../static/svg/gray-bottom-right-scoop.svg';

// should extract this out of the Block component into it's own styled component 
// since I want to have text / elements in a Block but outside the style
// I also want to use Blocks to space but not have the scoop style at all.
const backgroundWhite = 'white';
const grayScoopSize = '10px';
const grayScoopOffset = '10px';

const grayCornerScoopsCss = css`
  background-image: url(${topLeftSvg}), url(${topRightSvg}), url(${bottomLeftSvg}), url(${bottomRightSvg});
  background-color: ${backgroundWhite};
  background-size: ${grayScoopSize} ${grayScoopSize};
  background-repeat: no-repeat;
  background-position: 0 0, 100% 0, 0 100%, 100% 100%;
  padding: ${grayScoopOffset};
`;

const baseBlockCss = css`
  ${grayCornerScoopsCss}
  :not(:last-child) {
    margin-right: 7px;
  }
`;

export interface BlockProps {
  cssOverrides?: {
    flex: number
  },
}

export const BlockCssDefault = {
  flex: 1
}

export const Block: React.FC<BlockProps> = ({ children, cssOverrides = BlockCssDefault }) => {
  const computedCss = useMemo(() => {
    return css`
      ${baseBlockCss}
      flex: ${cssOverrides.flex};
    `
  },[cssOverrides])

  return (
    <div css={computedCss}>
      { children }
    </div>
  );
}