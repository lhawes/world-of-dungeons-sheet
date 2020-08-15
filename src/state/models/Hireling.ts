import { Skills } from './Character';
import { ItemInstance } from 'src/state/models/Item';

export interface Hireling {
  costPerDay: number,
  equipment: ItemInstance[],
  uuid: string, 
  maxHitPoints: number,
  name: string,
  notes: string,
  skills: Skills,
  // armor speed is determined by what is equiped
}

export interface HirelingInstance extends Hireling { // TODO
  uuid: string, // ref to hireling
  currentHitPoints: number,
}