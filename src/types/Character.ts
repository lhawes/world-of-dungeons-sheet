import { HirelingInstance, Hireling } from './Hirelings';
import { ItemInstance } from 'src/state/models/Item';

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

export interface Character {
  uuid: string, 
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