import * as React from 'react';
import { useContext, useMemo } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterUnequippedEquipment } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { ItemInstance } from 'src/state/models/Item';
import { EquipmentCard } from '../EquipmentCard/EquipmentCard';

export interface UnequippedEquipmentProps {
  [key: string]: any;
}

export const UnequippedEquipment: React.FC<UnequippedEquipmentProps> = ({}) => {
  const state = useContext(StateContext);
  const unequippedEquipment = useMemo(() => getSelectedCharacterUnequippedEquipment(state), [state[CharacterStateKey]]);
  const unequippedEquipmentNames = unequippedEquipment.map((item: ItemInstance) => {
    return <EquipmentCard item={item} key={item.uuid} />;
  })

  return (<>
    <p>Unequipped Equipment:</p>
    { unequippedEquipmentNames }
  </>);
}