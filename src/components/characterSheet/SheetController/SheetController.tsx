import * as React from 'react';

export interface SheetControllerProps {
  [key: string]: any;
}

export const SheetController = ({}: SheetControllerProps) => {
  return (<div>
    Sheet Controller to toggle edit mode
  </div>);
}