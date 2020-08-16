import { Level } from 'src/state/models/Character';

export interface LevelBenefits {
  hitDice: number,
  skills: number,
  attributes: number,
  abilities: number,
  damage: number,
  xpNeeded: number,
}

export const levelAdvancement: Record<Level, LevelBenefits> = {
  1: {
    hitDice: 1, // +CON initially
    skills: 2,
    attributes: 0,
    abilities: 2,
    damage: 0,
    xpNeeded: 0,
  },
  2: {
    hitDice: 1,
    skills: 0,
    attributes: 0,
    abilities: 0,
    damage: 0,
    xpNeeded: 1000,
  },
  3: {
    hitDice: 0,
    skills: 1,
    attributes: 0,
    abilities: 1,
    damage: 0,
    xpNeeded: 3000,
  },
  4: {
    hitDice: 1,
    skills: 0,
    attributes: 1,
    abilities: 0,
    damage: 0,
    xpNeeded: 6000,
  },
  5: {
    hitDice: 0,
    skills: 0,
    attributes: 0,
    abilities: 0,
    damage: 1,
    xpNeeded: 10000,
  },
  6: {
    hitDice: 1,
    skills: 1,
    attributes: 0,
    abilities: 1,
    damage: 0,
    xpNeeded: 15000,
  },
  7: {
    hitDice: 0,
    skills: 0,
    attributes: 1,
    abilities: 0,
    damage: 0,
    xpNeeded: 21000,
  },
  8: {
    hitDice: 1,
    skills: 0,
    attributes: 0,
    abilities: 0,
    damage: 0,
    xpNeeded: 28000,
  },
  9: {
    hitDice: 0,
    skills: 1,
    attributes: 0,
    abilities: 1,
    damage: 0,
    xpNeeded: 36000,
  },
  10: {
    hitDice: 1,
    skills: 0,
    attributes: 1,
    abilities: 0,
    damage: 1,
    xpNeeded: 45000,
  },
}