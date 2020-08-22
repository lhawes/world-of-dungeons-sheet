import * as React from 'react';
import { useContext, useMemo } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterWeapons } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { ItemInstance } from 'src/state/models/Item';
import { normalizeData } from 'src/utils/normalizers';

export interface WeaponsProps {
  [key: string]: any;
}

export const Weapons: React.FC<WeaponsProps> = ({}) => {
  const state = useContext(StateContext);
  const weapon = useMemo(() => getSelectedCharacterWeapons(state), [state[CharacterStateKey]]);

  const weaponNames = weapon.map((item: ItemInstance): { name: string } => {
    return { name: item.name };
  })

  return (<>
    Weapons: { normalizeData(weaponNames) }
  </>);
}