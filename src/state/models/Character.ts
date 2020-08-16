
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

export enum Skills {
  athletics = 'athletics',
  awareness = 'awareness',
  deception = 'deception',
  decipher = 'decipher',
  heal = 'heal',
  leadership = 'leadership',
  lore = 'lore',
  stealth = 'stealth',
  survival = 'survival',
}

export interface CharacterSkills {
  [Skills.athletics]: boolean,
  [Skills.awareness]: boolean,
  [Skills.deception]: boolean,
  [Skills.decipher]: boolean,
  [Skills.heal]: boolean,
  [Skills.leadership]: boolean,
  [Skills.lore]: boolean,
  [Skills.stealth]: boolean,
  [Skills.survival]: boolean,
}

export enum Abilities {
  bless = 'bless',
  cure = 'cure',
  turn = 'turn',
  vision = 'vision',
  hardy = 'hardy',
  skirmish = 'skirmish',
  slay = 'slay',
  tough = 'tough',
  backstab = 'backstab',
  lucky = 'lucky',
  reflexes = 'reflexes',
  tinker = 'tinker',
  cantrips = 'cantrips',
  command = 'command',
  ritual = 'ritual',
  summon = 'summon',
  pet = 'pet',
  scout = 'scout',
  volley = 'volley',
  wild = 'wild',
}

export interface CharacterAbilities {
  [Abilities.bless]: boolean,
  [Abilities.cure]: boolean,
  [Abilities.turn]: boolean,
  [Abilities.vision]: boolean,
  [Abilities.hardy]: boolean,
  [Abilities.skirmish]: boolean,
  [Abilities.slay]: boolean,
  [Abilities.tough]: boolean,
  [Abilities.backstab]: boolean,
  [Abilities.lucky]: boolean,
  [Abilities.reflexes]: boolean,
  [Abilities.tinker]: boolean,
  [Abilities.cantrips]: boolean,
  [Abilities.command]: boolean,
  [Abilities.ritual]: boolean,
  [Abilities.summon]: boolean,
  [Abilities.pet]: boolean,
  [Abilities.scout]: boolean,
  [Abilities.volley]: boolean,
  [Abilities.wild]: boolean,
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
  skills: CharacterSkills,
  specialAbilities: CharacterAbilities,
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
    [Skills.athletics]: false,
    [Skills.awareness]: false,
    [Skills.deception]: false,
    [Skills.decipher]: false,
    [Skills.heal]: false,
    [Skills.leadership]: false,
    [Skills.lore]: false,
    [Skills.stealth]: false,
    [Skills.survival]: false,
  },
  specialAbilities: {
    [Abilities.bless]: false,
    [Abilities.cure]: false,
    [Abilities.turn]: false,
    [Abilities.vision]: false,
    [Abilities.hardy]: false,
    [Abilities.skirmish]: false,
    [Abilities.slay]: false,
    [Abilities.tough]: false,
    [Abilities.backstab]: false,
    [Abilities.lucky]: false,
    [Abilities.reflexes]: false,
    [Abilities.tinker]: false,
    [Abilities.cantrips]: false,
    [Abilities.command]: false,
    [Abilities.ritual]: false,
    [Abilities.summon]: false,
    [Abilities.pet]: false,
    [Abilities.scout]: false,
    [Abilities.volley]: false,
    [Abilities.wild]: false,
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
  public skills: CharacterSkills;
  public specialAbilities: CharacterAbilities;
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
