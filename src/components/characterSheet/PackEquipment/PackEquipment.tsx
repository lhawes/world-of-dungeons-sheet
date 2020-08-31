/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useMemo, useContext, Fragment } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterAllEquipment } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { ItemInstance } from 'src/state/models/Item';
import { EquipmentCard } from '../EquipmentCard/EquipmentCard';

export interface EquipmentProps {
  [key: string]: any;
}

export const PackEquipment: React.FC<EquipmentProps> = ({}) => {
  const state = useContext(StateContext);
  const equipment = useMemo(() => getSelectedCharacterAllEquipment(state), [state[CharacterStateKey]]);

  const equipmentNames = equipment.map((item: ItemInstance) => {
    return <EquipmentCard item={item} key={item.uuid} />;
  });

  return (
    <Fragment>
      <p>Pack Equipment: </p>
      { equipmentNames }
    </Fragment>
  );
}