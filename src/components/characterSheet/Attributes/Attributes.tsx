import * as React from 'react';
import { useMemo, useContext } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterAttributes } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { normalizeData } from 'src/utils/normalizeData';
import { Block } from 'src/components/shared/Block/Block';

export interface AttributesProps {
  [key: string]: any;
}

export const Attributes: React.FC<AttributesProps> = ({}) => {
  const state = useContext(StateContext);
  const attributes = useMemo(() => getSelectedCharacterAttributes(state), [state[CharacterStateKey]]);
  const normalizedAttributes = normalizeData(attributes);
  return (<Block>
    Attributes: { normalizedAttributes }
  </Block>);
}