
import { ItemInstance, ItemTemplateConfig, Item } from 'src/state/models/Item';
import { HirelingInstance } from './Hireling';
import { v4 as uuidv4 } from 'uuid';

export enum CharacterClassType {
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

export type AttributeScoreRange = 0|1|2|3;

export type Level = 1|2|3|4|5|6|7|8|9|10;

export interface Attributes {
  [Attribute.STR]: AttributeScoreRange,
  [Attribute.DEX]: AttributeScoreRange,
  [Attribute.CON]: AttributeScoreRange,
  [Attribute.INT]: AttributeScoreRange,
  [Attribute.WIS]: AttributeScoreRange,
  [Attribute.CHA]: AttributeScoreRange,
}

export interface Skills {
  athletics: boolean,
  awareness: boolean,
  deception: boolean,
  decipher: boolean,
  heal: boolean,
  leadership: boolean,
  lore: boolean,
  stealth: boolean,
  survival: boolean,
}

export interface SpecialAbilities {
  bless: boolean,
  cure: boolean,
  turn: boolean,
  vision: boolean,
  hardy: boolean,
  skirmish: boolean,
  slay: boolean,
  tough: boolean,
  backstab: boolean,
  lucky: boolean,
  reflexes: boolean,
  tinker: boolean,
  cantrips: boolean,
  command: boolean,
  ritual: boolean,
  summon: boolean,
  pet: boolean,
  scout: boolean,
  volley: boolean,
  wild: boolean,
}

export interface CharacterType {
  uuid: string, 
  attributes: Attributes,
  class: CharacterClassType,
  coin: number,
  equipment: ItemInstance[],
  hirelings: HirelingInstance[],
  currentHitPoints: number,
  level: Level,
  name: string,
  notes: string,
  skills: Skills,
  specialAbilities: SpecialAbilities,
  xp: number,
  // hitDice is determined by level + CON
  // armor speed is determined by what is equiped
}

export const defaultCharacter: Omit<CharacterType, "uuid"> = {
  attributes: {
    [Attribute.STR]: 0,
    [Attribute.DEX]: 0,
    [Attribute.CON]: 0,
    [Attribute.INT]: 0,
    [Attribute.WIS]: 0,
    [Attribute.CHA]: 0,
  },
  class: CharacterClassType.fighter,
  coin: 0,
  equipment: [],
  hirelings: [],
  level: 1,
  name: 'default',
  notes: '',
  currentHitPoints: 10,
  skills: {
    athletics: false,
    awareness: false,
    deception: false,
    decipher: false,
    heal: false,
    leadership: false,
    lore: false,
    stealth: false,
    survival: false,
  },
  specialAbilities: {
    bless: false,
    cure: false,
    turn: false,
    vision: false,
    hardy: false,
    skirmish: false,
    slay: false,
    tough: false,
    backstab: false,
    lucky: false,
    reflexes: false,
    tinker: false,
    cantrips: false,
    command: false,
    ritual: false,
    summon: false,
    pet: false,
    scout: false,
    volley: false,
    wild: false,
  },
  xp: 0,
}

export interface CharacterConfigType extends Partial<CharacterType> {
  rawEquipment: ItemTemplateConfig[],
  rawHirelings: any[]
}

export class Character implements CharacterType {
  public static createCharacter(config: CharacterConfigType) {

    const normalizedEquipment: ItemInstance[] = config.rawEquipment
      .map((item) => Item.createItemTemplate(item).createItemInstance());

    return new Character({
      ...defaultCharacter,
      ...config,
      equipment: normalizedEquipment,
      uuid: uuidv4(),
    })
  }

  public uuid: string;
  public attributes: Attributes;
  public class: CharacterClassType;
  public coin: number;
  public equipment: ItemInstance[];
  public hirelings: HirelingInstance[];
  public currentHitPoints: number;
  public level: Level;
  public name: string;
  public notes: string;
  public skills: Skills;
  public specialAbilities: SpecialAbilities;
  public xp: number;

  constructor(config: CharacterType) {
    this.uuid = config.uuid;
    this.attributes = config.attributes;
    this.class = config.class;
    this.coin = config.coin;
    this.equipment = config.equipment;
    this.hirelings = config.hirelings;
    this.currentHitPoints = config.currentHitPoints;
    this.level = config.level;
    this.name = config.name;
    this.notes = config.notes;
    this.skills = config.skills;
    this.specialAbilities = config.specialAbilities;
    this.xp = config.xp;
  }
}
