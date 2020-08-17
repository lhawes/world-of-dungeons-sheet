// import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useMemo } from 'react';

const baseBlockCss = {
  background: 'white',
}

export interface BlockProps {
  cssOverrides?: {
    flex?: number
  },
}

export const BlockCssDefault = {
  flex: 1
}

export const Block: React.FC<BlockProps> = ({ children, cssOverrides = BlockCssDefault }) => {
  const computedCss = useMemo(() => {
    return {
      ...baseBlockCss,
      ...cssOverrides
    }
  },[cssOverrides])

  return (
    <div css={computedCss}>
      { children }
    </div>
  );
}