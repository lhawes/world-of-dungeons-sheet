import * as React from 'react';
import { useContext, useMemo } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterWeapons } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { ItemInstance } from 'src/state/models/Item';
import { EquipmentCard } from '../EquipmentCard/EquipmentCard';

export const Weapons: React.FC = ({}) => {
  const state = useContext(StateContext);
  const weapon = useMemo(() => getSelectedCharacterWeapons(state), [state[CharacterStateKey]]);

  const weaponNames = weapon.map((item: ItemInstance) => {
    return <EquipmentCard item={item} key={item.uuid} />;
  })

  return (<>
    <p>Weapons:</p> 
    { weaponNames }
  </>);
}