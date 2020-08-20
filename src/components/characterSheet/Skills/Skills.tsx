/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useContext, useMemo } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterSkills } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { Block } from 'src/components/shared/Block/Block';

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

export const Skills: React.FC<SkillsProps> = ({}) => {
  const state = useContext(StateContext);
  const skills = useMemo(() => getSelectedCharacterSkills(state), [state[CharacterStateKey]]);

  return (
    <div>
      <Block>
        Skills:
      </Block>
      <Block>
        {
          Object.keys(skills).map((skillKey: string) => {
            return (
              <div key={skillKey} css={
                skills[skillKey] ? activeSkillStyle : inactiveSkillStyle
              }>{ skillKey }</div>
            );
          })
        }
      </Block>
    </div>
  );
}