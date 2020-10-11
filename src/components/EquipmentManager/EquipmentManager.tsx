/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, useCallback, useContext } from 'react';
import { baseItems } from 'src/state/data/baseItems';
import { Item } from '../../state/models/Item';
import { Section } from 'src/components/shared/Section/Section';
import { grayScoopBackground } from 'src/sharedStyles/grayScoopTheme';
import { whiteScoopBackground } from '../../sharedStyles/whiteScoopTheme';
import { EquipmentShopCard } from '../EquipmentShopCard/EquipmentShopCard';
import { addItemToCharacterAction } from '../../state/characters/characterActions';
import { DispatchContext } from '../../App';

const gridLayout = css({
  gridTemplateColumns: `1fr`,
  gridTemplateRows: '1fr',
}, grayScoopBackground);

const CharacterWeaponsLayout = css({
  gridColumn: 1,
  gridRow: 1,
}, whiteScoopBackground);

export const EquipmentManager: React.FC = ({}) => {
  const dispatch = useContext(DispatchContext);
  const [showEquipment, setShowEquipment] = useState(false);

  const toggleEquipment = useCallback(() => setShowEquipment(!showEquipment), []);
  const addItemToCharacter = useCallback((id: string) => {
    dispatch(addItemToCharacterAction({id}));
  }, [addItemToCharacterAction])

  return (
    <Section layout={gridLayout}>
      <div css={CharacterWeaponsLayout}>
        Equipment Manager<br />
        Add equipment to character<br />
        { showEquipment ? (
          <div>
            <div><button onClick={toggleEquipment}>Hide</button></div>
            { baseItems.map((item: Item, i: number) => {
              return <EquipmentShopCard key={i} item={item} addItem={addItemToCharacter}/>;
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