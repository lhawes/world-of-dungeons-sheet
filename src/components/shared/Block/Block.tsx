import * as React from 'react';

const styling = {
  display: 'inline-block',
}

export const Block: React.FC = ({ children }) => {
  return (
    <div className={'Block'} style={styling}>
      { children }
    </div>
  );
}