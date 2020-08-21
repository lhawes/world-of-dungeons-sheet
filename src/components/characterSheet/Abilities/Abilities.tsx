/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { StateContext } from 'src/App';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { useContext, useMemo } from 'react';
import { getSelectedCharacterAbilities } from 'src/state/characters/characterSelectors';
import { Block } from 'src/components/shared/Block/Block';
import { ClericAbilities, FighterAbilities, ThiefAbilities, WizardAbilities, RangerAbilities, Abilities } from 'src/state/models/Character';
import { FlexContainer } from 'src/components/shared/FlexContainer/FlexContainer';

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

const ClassAbilityItem = css`
  display: inline-block;
  margin: 0 2rem;

`;

const ClassAbilityContainer = css`
  :not(:last-child) {
    border-bottom: 1px solid black;
  }
`;

const ClassAbilityBlock: React.FC<ClassAbilityBlockProps> = ({ abilityList }) => {

  return (
    <Block themedCss={ClassAbilityContainer}>
      { 
        abilityList.map((ability) => {
          return (<div key={ability.name} css={ClassAbilityItem}>{ ability.name }</div>);
        }) 
      }
    </Block>
  )
}

const abilityContainerStyles = css`
  flex-direction: column;
`;

export const CharacterAbilities: React.FC<AbilitiesProps> = ({}) => {
  const state = useContext(StateContext);
  const specialAbilities = useMemo(() => getSelectedCharacterAbilities(state), [state[CharacterStateKey]]);

  return (
    <FlexContainer themedCss={abilityContainerStyles}>
      <Block>Special Abilities:</Block>
      <Block themedCss={attributeContainerStyle}>
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

        </Block>
    </FlexContainer>);
}