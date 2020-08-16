import { UserConfigType, User } from "../models/User";
import { rawCharacterData } from './baseCharacter';


const rawUserData: UserConfigType = {
  userData: {
    player: 'lhawes',
    version: 'v0.0.1'
  },
  rawCharacters: [rawCharacterData],
  rawHirelings: [],
  hirelings: [],
  custom: null
}

export const UserData: User = User.createUser(rawUserData);