import { CharacterSkills } from './Character';
import { ItemInstance } from 'src/state/models/Item';

export interface Hireling {
  costPerDay: number,
  equipment: ItemInstance[],
  uuid: string, 
  name: string,
  notes: string,
  skills: CharacterSkills,
  // armor speed is determined by what is equiped
}

export interface HirelingInstance extends Hireling { // TODO
  uuid: string, // ref to hireling
  currentHitPoints: number,
}