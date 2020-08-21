/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useMemo } from 'react';

interface FlexContainerProps {
  themedCss?: any;
}

const baseContainerCss = css`
  display: flex;
  height: 100%;
`;

export const FlexContainer: React.FC<FlexContainerProps> = ({ children, themedCss }) => {
  const computedCss = useMemo(() => {
    return css`
      ${baseContainerCss}
      ${themedCss}
    `
  },[themedCss]);

  return (
    <div css={computedCss}>
      { children }
    </div>
  );
}