import * as React from 'react';
import { css } from 'emotion';

const blockCss = css`
  display: inline-block,
`;

export const Block: React.FC = ({ children }) => {
  return (
    <div className={blockCss}>
      { children }
    </div>
  );
}