/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Item } from 'src/state/models/Item';
import { equipmentCardStyle } from 'src/components/characterSheet/EquipmentCard/EquipmentCard';
import { useCallback } from 'react';

export interface EquipmentShopCardProps {
  item: Item,
  addItem: (id: string) => void,
}

export const EquipmentShopCard: React.FC<EquipmentShopCardProps> = ({ item, addItem }) => {
  const { 
    uuid,
    name,
    damage,
    description,
    itemClassification,
    armor,
    cost,
    packable,
  } = item;
  
  const addItemCb: () => void = useCallback(
    () => addItem(uuid),
    [addItem, uuid],
  )
  
  const showDamageBonus = damage && damage.bonus
    ? ` + ${damage.bonus}`
    : null;
  const showArmorBonus = armor && armor.bonus
    ? ` + ${armor.bonus}`
    : null;

  return (
    <div key={uuid} css={equipmentCardStyle}>
      <div>
        <button onClick={addItemCb}>Add to Character</button>
      </div>
      <p>{ name } | { itemClassification } | { cost } coin</p>
      { damage ? (
          <p>Damage: { damage.dice }d6{ showDamageBonus }, { damage.hands }</p>
      ) : null }
      { armor ? (
          <span>Base Armor: { armor.base }{ showArmorBonus }, { armor.class }</span>
      ) : null }
      <p>{ description }</p>
      <p>{ packable ? 'is packable' : 'not packable' }</p>
  </div>
  );
}