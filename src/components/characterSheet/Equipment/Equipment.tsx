import * as React from 'react';
import { useMemo, useContext } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterAllEquipment } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { ItemInstance } from 'src/state/models/Item';
import { normalizeData } from 'src/utils/normalizers';

export interface EquipmentProps {
  [key: string]: any;
}

export const PackEquipment: React.FC<EquipmentProps> = ({}) => {
  const state = useContext(StateContext);
  const equipment = useMemo(() => getSelectedCharacterAllEquipment(state), [state[CharacterStateKey]]);

  const equipmentNames = equipment.map((item: ItemInstance): { name: string } => {
    return { name: item.name };
  })
  return (<>
    Equipment: { normalizeData(equipmentNames) }
  </>);
}