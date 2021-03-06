/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { ItemInstance } from 'src/state/models/Item';
import { Fragment, useCallback } from 'react';

export const equipmentCardStyle = css({
  width: 'calc(50% - 2*10px)',
  border: '1px solid #c8c8c8',
  display: 'inline-block',
  padding: '8px',
  verticalAlign: 'top',
});

interface EquipmentCardProps {
  item: ItemInstance;
  removeItemFromCharacter?: (id: string) => void;
}

export const EquipmentCard: React.FC<EquipmentCardProps> = ({ item, removeItemFromCharacter }) => {
  const { 
    uuid,
    name,
    damage,
    description,
    itemClassification,
    equipped,
    quantity,
    armor,
  } = item;
  const showQuantity = quantity > 1 
    ? `| x${quantity}`
    : null;
  const showEquipped = equipped 
    ? '| Equipped'
    : '| In pack';
  const showDamageBonus = damage && damage.bonus
    ? ` + ${damage.bonus}`
    : null;
  const showArmorBonus = armor && armor.bonus
    ? ` + ${armor.bonus}`
    : null;

  const removeItemcb = useCallback(() => removeItemFromCharacter ? removeItemFromCharacter(uuid) : null,[removeItemFromCharacter, uuid])

  return (
    <div key={uuid} css={equipmentCardStyle}>
      { removeItemFromCharacter ? <button onClick={removeItemcb}>Remove Item</button> : null }
      <p>{ name } | { itemClassification } { showEquipped }{ showQuantity }</p>
      { damage ? (
        <Fragment>
          <p>Damage: { damage.dice }d6{ showDamageBonus }, { damage.hands }</p>
        </Fragment>
      ) : null }
      { armor ? (
        <Fragment>
          <span>Base Armor: { armor.base }{ showArmorBonus }, { armor.class }</span>
        </Fragment>
      ) : null }
      <p>{ description }</p>
    </div>
  );
}