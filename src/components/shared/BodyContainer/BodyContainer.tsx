import * as React from 'react';
import { css } from 'emotion'

const bodyContainerCss = css`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

export const BodyContainer: React.FC = ({ children }) => {
  return (
    <div className={bodyContainerCss}>
      <h3>World of Dungeons</h3>
      { children }
    </div>
  );
}