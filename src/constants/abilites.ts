import { Abilities } from 'src/state/models/Character';

export const abilitiesMap = {
  [Abilities.bless]: 'with holy water, you can anoint items so they are considered holy and magical—+3 damage vs. evil—for a short time',
  [Abilities.cure]: 'you can attempt to neutralize poisons, remove curses, or heal wounds with a touch',
  [Abilities.turn]: 'you can attempt to hold undead at bay with the power of your faith and a holy symbol',
  [Abilities.vision]: 'drink holy water to commune with your deity for divine guidance',
  [Abilities.hardy]: '+6 HP',
  [Abilities.skirmish]: '+1 damage and worn armor counts as one type lighter',
  [Abilities.slay]: '+2 melee damage',
  [Abilities.tough]: '+1 armor',
  [Abilities.backstab]: 'attack from concealment to do +3 damage',
  [Abilities.lucky]: 'once per day, turn a miss into a partial success',
  [Abilities.reflexes]: 'you always go first and can react when suddenly surprised',
  [Abilities.tinker]: 'you can attempt to quickly pick a lock, pick a pocket, or disarm a trap',
  [Abilities.cantrips]: 'you know three simple magical powers: Candle, Shadow, Throw Voice',
  [Abilities.command]: 'you can attempt to command any spirit, demon, etc.',
  [Abilities.ritual]: 'you may perform occult rituals—detailed in ancient tomes and scrolls—and begin with two known rituals',
  [Abilities.summon]: 'see magic to summon spirits',
  [Abilities.pet]: 'you have a loyal and effective animal companion',
  [Abilities.scout]: 'when you scout ahead you always spot the target before it spots you',
  [Abilities.volley]: '+2 ranged damage',
  [Abilities.wild]: 'you can converse with and attempt to command animals',
}