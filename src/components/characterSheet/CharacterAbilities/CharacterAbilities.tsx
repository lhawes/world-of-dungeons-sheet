/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { StateContext } from 'src/App';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { useContext, useMemo } from 'react';
import { getSelectedCharacterAbilities } from 'src/state/characters/characterSelectors';
import { Block } from 'src/components/shared/Block/Block';
import { ClericAbilities, FighterAbilities, ThiefAbilities, WizardAbilities, RangerAbilities, Abilities } from 'src/state/models/Character';
import { SubLayout } from 'src/components/shared/SubLayout/SubLayout';

export interface AbilitiesProps {
  [key: string]: any;
}

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

const classAbilityContainer = css`
  :not(:last-child) {
    border-bottom: 1px solid black;
  }
`;

const gridLayout = css({
  gridTemplateColumns: `1fr`,
  gridTemplateRows: '1fr 1fr 1fr 1fr 1fr',
});

const ClassAbilityBlock: React.FC<ClassAbilityBlockProps> = ({ abilityList }) => {
  return (
    <Block themedCss={classAbilityContainer}>
      { 
        abilityList.map((ability) => {
          return (<div key={ability.name} css={ClassAbilityItem}>{ ability.name }</div>);
        }) 
      }
    </Block>
  )
}

export const CharacterAbilities: React.FC<AbilitiesProps> = ({}) => {
  const state = useContext(StateContext);
  const specialAbilities = useMemo(() => getSelectedCharacterAbilities(state), [state[CharacterStateKey]]);

  return (
    <SubLayout layout={gridLayout}>
      <Block>Special Abilities:</Block>
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
    </SubLayout>);
}