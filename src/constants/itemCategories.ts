import { ItemClassificationType } from 'src/state/models/Item';

// Why objects instead of an array? To reduce lookup time.

export const isWeapon: Record<string, true> = {
  [ItemClassificationType.bow]: true,
  [ItemClassificationType.greatWeapon]: true,
  [ItemClassificationType.heavyBow]: true,
  [ItemClassificationType.lightWeapon]: true,
  [ItemClassificationType.martialWeapon]: true,
  [ItemClassificationType.shortbow]: true,
};

export const isArmor: Record<string, true> = {
  [ItemClassificationType.fullArmor]: true,
  [ItemClassificationType.lightArmor]: true,
  [ItemClassificationType.shield]: true,
};

export const isWornArmor: Record<string, true> = {
  [ItemClassificationType.fullArmor]: true,
  [ItemClassificationType.lightArmor]: true,
};

export const isShield: Record<string, true> = {
  [ItemClassificationType.shield]: true,
};