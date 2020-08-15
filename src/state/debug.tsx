import * as React from 'react';
export interface DebugComponentProps {
  children?: React.ReactNode;
}

export const DebugComponent = ({ children }: DebugComponentProps) => {
  return (
    <pre style={{ textAlign: 'left' }}>
      <code>
        {children}
      </code>
    </pre>
  );
}