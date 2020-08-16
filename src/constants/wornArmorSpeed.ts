import { ArmorWeight } from 'src/state/models/Item';

export const  wornArmorSpeed = {
  [ArmorWeight.full]: 'slow',
  [ArmorWeight.light]: 'normal',
  [ArmorWeight.none]: 'fast',
};