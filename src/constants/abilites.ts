import { 
  ClericAbilities, FighterAbilities, ThiefAbilities, WizardAbilities, RangerAbilities
 } from 'src/state/models/Character';

export const abilitiesMap = {
  [ClericAbilities.bless]: 'with holy water, you can anoint items so they are considered holy and magical—+3 damage vs. evil—for a short time',
  [ClericAbilities.cure]: 'you can attempt to neutralize poisons, remove curses, or heal wounds with a touch',
  [ClericAbilities.turn]: 'you can attempt to hold undead at bay with the power of your faith and a holy symbol',
  [ClericAbilities.vision]: 'drink holy water to commune with your deity for divine guidance',
  [FighterAbilities.hardy]: '+6 HP',
  [FighterAbilities.skirmish]: '+1 damage and worn armor counts as one type lighter',
  [FighterAbilities.slay]: '+2 melee damage',
  [FighterAbilities.tough]: '+1 armor',
  [ThiefAbilities.backstab]: 'attack from concealment to do +3 damage',
  [ThiefAbilities.lucky]: 'once per day, turn a miss into a partial success',
  [ThiefAbilities.reflexes]: 'you always go first and can react when suddenly surprised',
  [ThiefAbilities.tinker]: 'you can attempt to quickly pick a lock, pick a pocket, or disarm a trap',
  [WizardAbilities.cantrips]: 'you know three simple magical powers: Candle, Shadow, Throw Voice',
  [WizardAbilities.command]: 'you can attempt to command any spirit, demon, etc.',
  [WizardAbilities.ritual]: 'you may perform occult rituals—detailed in ancient tomes and scrolls—and begin with two known rituals',
  [WizardAbilities.summon]: 'see magic to summon spirits',
  [RangerAbilities.pet]: 'you have a loyal and effective animal companion',
  [RangerAbilities.scout]: 'when you scout ahead you always spot the target before it spots you',
  [RangerAbilities.volley]: '+2 ranged damage',
  [RangerAbilities.wild]: 'you can converse with and attempt to command animals',
}