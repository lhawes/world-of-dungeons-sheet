import { UserConfigType, User } from "../models/User";
import { rawCharacterData } from './baseCharacter';


const rawUserData: UserConfigType = {
  player: 'lhawes',
  rawCharacters: [rawCharacterData],
  rawHirelings: [],
  hirelings: [],
  custom: null
}

export const UserData: User = User.createUser(rawUserData);