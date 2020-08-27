/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useContext, useMemo, useCallback } from 'react';
import { StateContext, DispatchContext } from 'src/App';
import { getSelectedCharacterSkills } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { setCharacterSkillProperty } from 'src/state/characters/characterActions';
import { Skills } from 'src/state/models/Character';


export interface SkillsProps {
  [key: string]: any;
}

const skillStyle = css`
  width: 100%;
`;

const activeSkillStyle = css`
  ${skillStyle}
  color: black;
`;
const inactiveSkillStyle = css`
  ${skillStyle}
  color: #c8c8c8;
`;

const skillListStyles = css`
  background-color: white;
  padding: 10px;
  flex: 1
`;

const flexContainer = css`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const CharacterSkills: React.FC<SkillsProps> = ({}) => {
  const state = useContext(StateContext);
  const skills = useMemo(() => getSelectedCharacterSkills(state), [state[CharacterStateKey]]);

  const dispatch = useContext(DispatchContext);
  const toggleClick = useCallback((active: boolean, skillName: Skills) => () => dispatch(setCharacterSkillProperty({ active, skillName })), [dispatch]);  

  return (
    <div css={flexContainer}>
      <div>
        Skills:
      </div>
      <div css={skillListStyles}>
        {
          Object.keys(skills).map((skillKey: Skills) => {
            return (
              <div 
                key={skillKey} 
                css={ skills[skillKey] ? activeSkillStyle : inactiveSkillStyle }
                onClick={toggleClick(!skills[skillKey], skillKey)}
              >{ skillKey }</div>
            );
          })
        }
      </div>
    </div>
  );
}