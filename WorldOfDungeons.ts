export enum Class {
  fighter = 'Fighter',
  theif = 'Theif',
  cleric = 'Cleric',
  wizard = 'Wizard',
  ranger = 'Ranger',
  custom = 'Custom',
}

export enum Attribute {
  STR = 'STR',
  DEX = 'DEX',
  CON = 'CON',
  INT = 'INT',
  WIS = 'WIS',
  CHA = 'CHA'
}

export enum ArmorWeight {
  none = 'None',
  light = 'Light',
  full = 'Full'
}

export type AttributeScoreRange = [0,1,2,3];

export type Level = [1,2,3,4,5,6,7,8,9,10];

export interface Attributes {
  [Attribute.STR]: AttributeScoreRange,
  [Attribute.DEX]: AttributeScoreRange,
  [Attribute.CON]: AttributeScoreRange,
  [Attribute.INT]: AttributeScoreRange,
  [Attribute.WIS]: AttributeScoreRange,
  [Attribute.CHA]: AttributeScoreRange,
}

export interface Skills {
  atheltics: boolean,
  awareness: boolean,
  deception: boolean,
  decipher: boolean,
  heal: boolean,
  leadership: boolean,
  lore: boolean,
  stealth: boolean,
  survival: boolean,
}

export interface SpecialAbility {
  active: boolean,
  description: string,
}

export interface SpecialAbilities {
  bless: SpecialAbility,
  cure: SpecialAbility,
  turn: SpecialAbility,
  vision: SpecialAbility,
  hardy: SpecialAbility,
  skirmishh: SpecialAbility,
  slay: SpecialAbility,
  tough: SpecialAbility,
  backstab: SpecialAbility,
  lucky: SpecialAbility,
  reflexes: SpecialAbility,
  tinker: SpecialAbility,
  cantrips: SpecialAbility,
  command: SpecialAbility,
  ritual: SpecialAbility,
  summon: SpecialAbility,
  pet: SpecialAbility,
  scout: SpecialAbility,
  volley: SpecialAbility,
  wild: SpecialAbility,
}

export enum Handed {
  off = 'Off', // can be off handed
  main = 'Main', // martial weapons
  two = 'Two', // two handed
}

export enum ItemType {
  lightWeapon = 'Light Weapon',
  martialWeapon = 'Martial Weapon',
  greatWeapon = 'Great Weapon',
  shortbow = 'Shortbow',
  bow = 'Bow',
  heavyBow = 'Heavy Bow/Gun',
  lightArmor = 'Light Armor',
  fullArmor = 'Full Armor',
  sheild = 'Sheild',
  advGear = 'Adventuring Gear',
  tools = 'Tools',
  occultItems = 'Occult Items',
  fancyItems = 'Fancy Items',
  oil = 'Fire Oil',
  boats = 'Boats',
  carts = 'Carts',
  property = 'Property',
  horses = 'Horses',
  custom = 'Custom',
}

export interface Item {
  id: number, // try using the uuid lib
  name: string,
  cost: number,
  packable: boolean, // is this something like a cart or a book?
  damage: { // determines if a weapon
    dice: number,
    bonus: number,
    hands: Handed | null,
  } | null,
  description: string,
  type: ItemType,
  maxUses: number | null, // current uses will need to be tracked per instance
  armor: { // determines if armor
    base: number,
    bonus: number,
    class: ArmorWeight,
  } | null,
}

export interface ItemInstance extends Item {
  quantity: number,
  id: number, // id of Item
  currentUses: number,
  equipped: boolean, // currently equipped for the character (sheild!!!)
}

export interface Character {
  id: number, // try using the uuid lib
  attributes: Attributes,
  class: Class,
  coin: number,
  equipment: ItemInstance[], //
  hirelings: HirelingInstance[], // hireling id
  hitDice: number,
  maxHitPoints: number,
  currentHitPoints: number,
  level: Level,
  name: string,
  notes: string,
  skills: Skills,
  specialAbilities: SpecialAbilities,
  xp: number,
  // armor speed is determined by what is equiped
}

export interface Hireling {
  costPerDay: number,
  equipment: Item[],
  id: number, // try using the uuid lib
  maxHitPoints: number,
  name: string,
  notes: string,
  skills: Skills,
  // armor speed is determined by what is equiped
}

export interface HirelingInstance extends Hireling { // TODO
  id: number, // ref to hireling
  currentHitPoints: number,
}

export interface Characters {
  player: string,
  version: string,
  characters: Character[],
  hirelings: Hireling[],
  custom: {
    skills: any,
    specialAbilities: any,
    equipment: any, // Items
  }
}

const baseItems: Item[] = [
  {
    id: 1, // try using the uuid lib
    name: 'Dagger, short sword, or hand axe',
    cost: 10,
    packable: true, 
    damage: {
      dice: 1, 
      bonus: 0, 
      hands: Handed.off,
    }, 
    description: 'May be weilded as an off handed weapon to re-roll damage once per attack.',
    type: ItemType.lightWeapon,
    maxUses: null, 
    armor: null,
  },
  {
    id: 2,
    name: 'Long sword, hammers, axes, or spears',
    cost: 30,
    packable: true, 
    damage: {
      dice: 1, 
      bonus: 1, 
      hands: Handed.main,
    }, 
    description: 'Must be weilded in main hand.',
    type: ItemType.lightWeapon,
    maxUses: null, 
    armor: null,
  },
  {
    id: 3,
    name: 'Two handed swords, battle-axes, or pole-arms',
    cost: 40,
    packable: true, 
    damage: {
      dice: 1, 
      bonus: 2, 
      hands: Handed.two,
    }, 
    description: 'Must be weilded in main hand.',
    type: ItemType.lightWeapon,
    maxUses: null, 
    armor: null,
  },
];
