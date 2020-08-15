
import { 
  Handed, 
  Item, 
  ItemClassificationType 
} from '../models/Item';

export const baseItems: Item[] = [
  Item.createItemTemplate({
  armor: null,
  cost: 10, 
  damage: {
    bonus: 0, 
    dice: 1, 
    hands: Handed.off,
  },
  description: 'May be weilded as an off handed weapon to re-roll damage once per attack.',
  maxUses: null, 
  name: 'Dagger, short sword, or hand axe',
  packable: true, 
  type: ItemClassificationType.lightWeapon,
  }),
  // {
  //   id: uuidv4(),
  //   name: 'Long sword, hammers, axes, or spears',
  //   cost: 30,
  //   packable: true, 
  //   damage: {
  //     dice: 1, 
  //     bonus: 1, 
  //     hands: Handed.main,
  //   }, 
  //   description: 'Must be weilded in main hand.',
  //   type: ItemType.lightWeapon,
  //   maxUses: null, 
  //   armor: null,
  // },
  // {
  //   id: 3,
  //   name: 'Two handed swords, battle-axes, or pole-arms',
  //   cost: 40,
  //   packable: true, 
  //   damage: {
  //     dice: 1, 
  //     bonus: 2, 
  //     hands: Handed.two,
  //   }, 
  //   description: 'Must be weilded in main hand.',
  //   type: ItemType.lightWeapon,
  //   maxUses: null, 
  //   armor: null,
  // },
];
