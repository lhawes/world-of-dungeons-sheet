/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, useCallback } from 'react';
import { baseItems } from 'src/state/data/baseItems';
import { Item } from '../../state/models/Item';
import { equipmentCardStyle } from 'src/components/characterSheet/EquipmentCard/EquipmentCard';
import { Section } from 'src/components/shared/Section/Section';
import { grayScoopBackground } from 'src/sharedStyles/grayScoopTheme';
import { whiteScoopBackground } from '../../sharedStyles/whiteScoopTheme';

export interface ItemCardProps {
  item: Item,
}

export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
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
  
  const showDamageBonus = damage && damage.bonus
    ? ` + ${damage.bonus}`
    : null;
  const showArmorBonus = armor && armor.bonus
    ? ` + ${armor.bonus}`
    : null;

  return (
    <div key={uuid} css={equipmentCardStyle}>
      <div>
        <button>Add to Character</button>
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

const gridLayout = css({
  gridTemplateColumns: `1fr`,
  gridTemplateRows: '1fr',
}, grayScoopBackground);

const CharacterWeaponsLayout = css({
  gridColumn: 1,
  gridRow: 1,
}, whiteScoopBackground);

export const EquipmentManager: React.FC = ({}) => {
  const [showEquipment, setShowEquipment] = useState(false);

  const toggleEquipment = useCallback(() => setShowEquipment(!showEquipment), []);

  return (
    <Section layout={gridLayout}>
      <div css={CharacterWeaponsLayout}>
        Equipment Manager<br />
        Add equipment to character<br />
        { showEquipment ? (
          <div>
            <div><button onClick={toggleEquipment}>Hide</button></div>
            { baseItems.map((item: Item, i: number) => {
              return <ItemCard key={i} item={item} />;
            }) }
          </div>
        ) : (
          <div>
            <button onClick={toggleEquipment}>Show</button>
          </div>
        ) }
        </div>
    </Section>
  );
}