/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useContext, useMemo } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterSkills } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';


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

  return (
    <div css={flexContainer}>
      <div>
        Skills:
      </div>
      <div css={skillListStyles}>
        {
          Object.keys(skills).map((skillKey: string) => {
            return (
              <div key={skillKey} css={
                skills[skillKey] ? activeSkillStyle : inactiveSkillStyle
              }>{ skillKey }</div>
            );
          })
        }
      </div>
    </div>
  );
}