/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { StateContext } from 'src/App';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { useContext, useMemo } from 'react';
import { getSelectedCharacterAbilities } from 'src/state/characters/characterSelectors';
import { Block } from 'src/components/shared/Block/Block';
import { ClericAbilities, FighterAbilities, ThiefAbilities, WizardAbilities, RangerAbilities, Abilities } from 'src/state/models/Character';

export interface AbilitiesProps {
  [key: string]: any;
}

const attributeContainerStyle = css`
  display: flex;
  flex-direction: row wrap;
  background-color: #fff;
`;

const attributeColumnStyle = css`
  flex: 1;
`;

const allClassAbilites = [
  ClericAbilities,
  FighterAbilities,
  ThiefAbilities,
  WizardAbilities,
  RangerAbilities,
];

interface ClassAbility {
  name: Abilities,
  active: boolean,
}

interface ClassAbilityBlockProps {
  abilityList: ClassAbility[]
}

const ClassAbilityBlock: React.FC<ClassAbilityBlockProps> = ({ abilityList }) => {

  return (
    <div>
      { 
        abilityList.map((ability) => {
          return (<div key={ability.name}   >{ ability.name }</div>);
        }) 
      }
    </div>
  )
}

export const CharacterAbilities: React.FC<AbilitiesProps> = ({}) => {
  const state = useContext(StateContext);
  const specialAbilities = useMemo(() => getSelectedCharacterAbilities(state), [state[CharacterStateKey]]);

  return (
    <div>
      <Block>Special Abilities:</Block>
      <div css={attributeContainerStyle}>
        <div css={attributeColumnStyle}>
              {
                specialAbilities ? 
                allClassAbilites.map((classAbilities, i) => {
                  const formattedAbilities = Object.keys(classAbilities).reduce((acc: ClassAbility[], abilityKey: Abilities) => {
                    acc.push({ name: abilityKey, active: specialAbilities[abilityKey]});
                    return acc;
                  }, []);
                  
                  return (
                    <ClassAbilityBlock key={i} abilityList={formattedAbilities} />
                  );
                })
                : null
              }
            </div>

        </div>
    </div>);
}