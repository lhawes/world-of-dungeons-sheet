/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useMemo } from 'react';

const baseBlockCss = css`

`;

export interface BlockProps {
  size?: number | string;
  themedCss?: any;
}

export const sizeDefault = 1;

export const Block: React.FC<BlockProps> = ({ children, themedCss }) => {
  const computedCss = useMemo(() => {
    return css`
      ${baseBlockCss}
      ${themedCss}
    `
  },[themedCss])

  return (
    <div css={computedCss}>
        { children }
    </div>
  );
}