import { v4 as uuidv4 } from 'uuid';

export enum Handed {
  off = 'Off', // can be off handed
  main = 'Main', // martial weapons
  two = 'Two', // two handed
}

export enum ArmorWeight {
  none = 'None',
  light = 'Light',
  full = 'Full'
}

export enum ItemClassificationType {
  lightWeapon = 'Light Weapon',
  martialWeapon = 'Martial Weapon',
  greatWeapon = 'Great Weapon',
  shortbow = 'Shortbow',
  bow = 'Bow',
  heavyBow = 'Heavy Bow/Gun',
  lightArmor = 'Light Armor',
  fullArmor = 'Full Armor',
  shield = 'Shield',
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

export interface ItemTemplate {
  uuid: string, 
  name: string,
  cost: number | null,
  packable: boolean, // is this something like a cart or a book?
  damage: { // determines if a weapon
    dice: number,
    bonus: number,
    hands: Handed | null,
  } | null,
  description: string,
  type: ItemClassificationType | null,
  maxUses: number | null, // current uses will need to be tracked per instance
  armor: { // determines if armor
    base: number,
    bonus: number,
    class: ArmorWeight,
  } | null,
}

export interface ItemTemplateConfig extends Partial<ItemTemplate> {};

export interface ItemInstance extends ItemTemplate {
  quantity: number,
  uuid: string, // id of Item
  currentUses: number | null,
  equipped: boolean, // currently equipped for the character (shield!!!)
}

export const defaultItemTemplate: Omit<ItemTemplate, "uuid"> = {
  name: 'default',
  cost: null,
  packable: true,
  damage: null,
  description: 'default',
  type: null,
  maxUses: null,
  armor: null,
}

export class Item implements ItemTemplate {
  public static createItemTemplate(config: ItemTemplateConfig) {
    const props: ItemTemplate = {
      ...defaultItemTemplate,
      ...config,
      uuid: uuidv4(),
    }
    return new Item(props);
  }

  public uuid: string;
  public name: string;
  public cost: number | null;
  public packable: boolean;
  public damage: {
    dice: number,
    bonus: number,
    hands: Handed | null,
  } | null;
  public description: string; 
  public type: ItemClassificationType | null; 
  public maxUses: number | null; 
  public armor: {
    base: number,
    bonus: number,
    class: ArmorWeight,
  } | null;

  constructor(config: ItemTemplate) {
    this.uuid = config.uuid;
    this.name = config.name;
    this.cost = config.cost;
    this.packable = config.packable;
    this.damage = config.damage;
    this.description = config.description;
    this.type = config.type;
    this.maxUses = config.maxUses;
    this.armor = config.armor;
  }

  public createItemInstance(config?: { quantity: number }): ItemInstance {
    // intentionally returning an object here so it can be easily modified.
    return {
      name: this.name,
      cost: this.cost,
      packable: this.packable,
      damage: this.damage,
      description: this.description,
      type: this.type,
      maxUses: this.maxUses,
      armor: this.armor,
      quantity: config?.quantity ?? 1,
      equipped: false,
      currentUses: this.maxUses,
      uuid: uuidv4()
    }
  }
}
