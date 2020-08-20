/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useMemo, useContext } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterAttributes } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { Block } from 'src/components/shared/Block/Block';
import { AttributeScoreRange, PhysicalAttribute } from 'src/state/models/Character';
import { MentalAttribute } from '../../../state/models/Character';

export interface AttributesProps {
  [key: string]: any;
}

interface AttributeBlockProps {
  name: string,
  score: AttributeScoreRange
}

const attributeNameStyle = css`
  display: inline-block;
  font-size: 45px;
  padding: 4px;
`;

const scoreBoxLength = '3.5rem';

const attributeScoreStyle = css`
  display: inline-block;
  font-size: 25px;
  padding: 4px;
  border: 1px solid black;
  height: ${scoreBoxLength};
  width: ${scoreBoxLength};
  text-align: center;
  line-height: ${scoreBoxLength};
`;

const attributeBox = css`

`;

const AttributeBlock: React.FC<AttributeBlockProps> = ({ name, score }) => {
  return (
    <div css={attributeBox}>
      <div css={attributeScoreStyle}>
        { score }
      </div>
      <div css={attributeNameStyle}>
        { name }
      </div>
    </div>
  );
}

const attributeContainerStyle = css`
  display: flex;
  flex-direction: row wrap;
  background-color: #fff;
`;

const attributeColumnStyle = css`
  flex: 1;
`;

export const Attributes: React.FC<AttributesProps> = ({}) => {
  const state = useContext(StateContext);
  const attributes = useMemo(() => getSelectedCharacterAttributes(state), [state[CharacterStateKey]]);

  return (<div>
    <Block>
      Attributes:
    </Block>
    <div css={attributeContainerStyle}>
      <div css={attributeColumnStyle}>
        {
          attributes ? Object
            .keys(PhysicalAttribute)
            .map((attName) => <AttributeBlock key={attName} name={attName} score={attributes[attName]} />) 
          : null
        }
      </div>
      <div css={attributeColumnStyle}>
        {
          attributes 
          ? Object
            .keys(MentalAttribute)
            .map((attName) => <AttributeBlock key={attName} name={attName} score={attributes[attName]} />) 
          : null
        }
      </div>
    </div>
  </div>);
}