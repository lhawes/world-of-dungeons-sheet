/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useMemo } from 'react';

const baseBlockCss = css`
  :not(:last-child) {
    margin-right: 7px;
  }
`;

export interface BlockProps {
  size?: number | string;
  themedCss?: any;
}

export const sizeDefault = 1;

export const Block: React.FC<BlockProps> = ({ children, size = sizeDefault, themedCss }) => {
  const computedCss = useMemo(() => {
    return css`
      ${baseBlockCss}
      ${themedCss}
      flex: ${size};
    `
  },[size, themedCss])

  return (
    <div css={computedCss}>
        { children }
    </div>
  );
}