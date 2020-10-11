/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useMemo, useContext, Fragment, useCallback } from 'react';
import { StateContext, DispatchContext } from 'src/App';
import { getSelectedCharacterAllEquipment } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { ItemInstance } from 'src/state/models/Item';
import { EquipmentCard } from '../EquipmentCard/EquipmentCard';
import { removeItemFromCharacterAction } from 'src/state/characters/characterActions';

export interface EquipmentProps {
  [key: string]: any;
}

export const PackEquipment: React.FC<EquipmentProps> = ({}) => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const equipment = useMemo(() => getSelectedCharacterAllEquipment(state), [state[CharacterStateKey]]);
  const removeItem = useCallback((id: string) => dispatch(removeItemFromCharacterAction(id)),[removeItemFromCharacterAction, dispatch]);

  const equipmentNames = equipment.map((item: ItemInstance) => {
    return <EquipmentCard item={item} key={item.uuid} removeItemFromCharacter={removeItem} />;
  });

  return (
    <Fragment>
      <p>Pack Equipment: </p>
      { equipmentNames }
    </Fragment>
  );
}