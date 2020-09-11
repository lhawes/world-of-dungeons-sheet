import * as React from 'react';
import { css } from 'emotion'

const bodyContainerCss = css`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

export interface BodyContainerProps {
  title: string;

}

export const BodyContainer: React.FC<BodyContainerProps> = ({ children, title }) => {
  return (
    <div className={bodyContainerCss}>
      <h3>{title}</h3>
      { children }
    </div>
  );
}