import * as React from 'react';
import { Block } from 'src/components/shared/Block/Block';

export interface SheetControllerProps {
  [key: string]: any;
}

export const SheetController: React.FC<SheetControllerProps> = ({}) => {
  return (<Block>
    Sheet Controller to toggle edit mode
  </Block>);
}