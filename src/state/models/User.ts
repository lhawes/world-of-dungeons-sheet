import { Hireling } from './Hireling';
import { CharacterType, Character, CharacterConfigType } from './Character';
import { VERSION } from 'src/constants/version';

export interface CustomContent {
  skills: any,
  specialAbilities: any,
  equipment: any,
}

export interface UserType {
  player: string,
  version: string,
  characters: CharacterType[],
  hirelings: Hireling[],
  custom: CustomContent | null;
}

export interface UserConfigType extends Partial<UserType> {
  rawCharacters: CharacterConfigType[],
  rawHirelings: any[],
}

export const userDefaults: UserType = {
  player: 'default player name',
  version: VERSION,
  characters: [],
  hirelings: [],
  custom: null
}

export class User implements UserType {
  public static createUser(config: UserConfigType) {
    const characters: CharacterType[] = config.rawCharacters.map((character: CharacterConfigType) => Character.createCharacter(character));

    return new User({
      ...userDefaults,
      ...config,
      characters,
      hirelings: [],
    })
  }


  public player: string;
  public version: string;
  public characters: CharacterType[];
  public hirelings: Hireling[];
  public custom: CustomContent | null;

  constructor(config: UserType) {
    this.player = config.player;
    this.version = config.version;
    this.characters = config.characters;
    this.hirelings = config.hirelings;
    this.custom = config.custom;
  }
}