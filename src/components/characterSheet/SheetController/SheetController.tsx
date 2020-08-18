import * as React from 'react';

export interface SheetControllerProps {
  [key: string]: any;
}

export const SheetController: React.FC<SheetControllerProps> = ({}) => {
  return (<>
    Sheet Controller to toggle edit mode
  </>);
}