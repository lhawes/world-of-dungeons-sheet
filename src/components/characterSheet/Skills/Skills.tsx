import * as React from 'react';
import { useContext, useMemo } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterSkills } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { normalizeData } from 'src/utils/normalizeData';

export interface SkillsProps {
  [key: string]: any;
}

export const Skills = ({}: SkillsProps) => {
  const state = useContext(StateContext);
  const skills = useMemo(() => getSelectedCharacterSkills(state), [state[CharacterStateKey]]);
  const activeSkills = Object
  .keys(skills)
  .filter((skillKey: string): boolean => {
    return skills[skillKey];
  });


  return (<div>
    Skills: { normalizeData(activeSkills) }
  </div>);
}