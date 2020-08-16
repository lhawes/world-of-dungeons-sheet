import * as React from 'react';

const styling = {
  maxWidth: '1200px'
}

export const BodyContainer: React.FC = ({ children }) => {
  return (
    <div className="App" style={styling}>
      <h3>World of Dungeons</h3>
      { children }
    </div>
  );
}