
import { ItemInstance, ItemTemplateConfig, Item } from 'src/state/models/Item';
import { HirelingInstance } from './Hireling';
import { v4 as uuidv4 } from 'uuid';

export enum CharacterClassType {
  fighter = 'fighter',
  theif = 'theif',
  cleric = 'cleric',
  wizard = 'wizard',
  ranger = 'ranger',
  custom = 'custom',
}

export enum MentalAttribute  {
  INT = 'INT',
  WIS = 'WIS',
  CHA = 'CHA'
}

export enum PhysicalAttribute {
  STR = 'STR',
  DEX = 'DEX',
  CON = 'CON',
}

export const Attribute = {
  ...PhysicalAttribute,
  ...MentalAttribute
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

export enum ClericAbilities {
  bless = 'bless',
  cure = 'cure',
  turn = 'turn',
  vision = 'vision',
}

export enum FighterAbilities {
  hardy = 'hardy',
  skirmish = 'skirmish',
  slay = 'slay',
  tough = 'tough',
}

export enum ThiefAbilities {
  backstab = 'backstab',
  lucky = 'lucky',
  reflexes = 'reflexes',
  tinker = 'tinker',
}

export enum WizardAbilities {
  cantrips = 'cantrips',
  command = 'command',
  ritual = 'ritual',
  summon = 'summon',
}

export enum RangerAbilities {
  pet = 'pet',
  scout = 'scout',
  volley = 'volley',
  wild = 'wild',
}

export type Abilities = ClericAbilities|FighterAbilities|ThiefAbilities|WizardAbilities|RangerAbilities;

export interface CharacterAbilities {
  [ClericAbilities.bless]: boolean,
  [ClericAbilities.cure]: boolean,
  [ClericAbilities.turn]: boolean,
  [ClericAbilities.vision]: boolean,
  [FighterAbilities.hardy]: boolean,
  [FighterAbilities.skirmish]: boolean,
  [FighterAbilities.slay]: boolean,
  [FighterAbilities.tough]: boolean,
  [ThiefAbilities.backstab]: boolean,
  [ThiefAbilities.lucky]: boolean,
  [ThiefAbilities.reflexes]: boolean,
  [ThiefAbilities.tinker]: boolean,
  [WizardAbilities.cantrips]: boolean,
  [WizardAbilities.command]: boolean,
  [WizardAbilities.ritual]: boolean,
  [WizardAbilities.summon]: boolean,
  [RangerAbilities.pet]: boolean,
  [RangerAbilities.scout]: boolean,
  [RangerAbilities.volley]: boolean,
  [RangerAbilities.wild]: boolean,
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
    [ClericAbilities.bless]: false,
    [ClericAbilities.cure]: false,
    [ClericAbilities.turn]: false,
    [ClericAbilities.vision]: false,
    [FighterAbilities.hardy]: false,
    [FighterAbilities.skirmish]: false,
    [FighterAbilities.slay]: false,
    [FighterAbilities.tough]: false,
    [ThiefAbilities.backstab]: false,
    [ThiefAbilities.lucky]: false,
    [ThiefAbilities.reflexes]: false,
    [ThiefAbilities.tinker]: false,
    [WizardAbilities.cantrips]: false,
    [WizardAbilities.command]: false,
    [WizardAbilities.ritual]: false,
    [WizardAbilities.summon]: false,
    [RangerAbilities.pet]: false,
    [RangerAbilities.scout]: false,
    [RangerAbilities.volley]: false,
    [RangerAbilities.wild]: false,
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
