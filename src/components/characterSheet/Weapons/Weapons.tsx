import * as React from 'react';
import { useContext, useMemo, useCallback } from 'react';
import { StateContext, DispatchContext } from 'src/App';
import { getSelectedCharacterWeapons } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { ItemInstance } from 'src/state/models/Item';
import { EquipmentCard } from '../EquipmentCard/EquipmentCard';
import { removeItemFromCharacterAction } from 'src/state/characters/characterActions';

export const Weapons: React.FC = ({}) => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const weapon = useMemo(() => getSelectedCharacterWeapons(state), [state[CharacterStateKey]]);
  const removeItem = useCallback((id: string) => dispatch(removeItemFromCharacterAction(id)),[removeItemFromCharacterAction, dispatch]);

  const weaponNames = weapon.map((item: ItemInstance) => {
    return <EquipmentCard item={item} key={item.uuid} removeItemFromCharacter={removeItem} />;
  });

  return (<>
    <p>Weapons:</p> 
    { weaponNames }
  </>);
}