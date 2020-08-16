import * as React from 'react';
import { Block } from 'src/components/shared/Block/Block';

export interface AdvancementProps {
  [key: string]: any;
}

export const Advancement: React.FC<AdvancementProps> = ({}) => {
  return (<Block>
    Advancement link to level advancement
  </Block>);
}