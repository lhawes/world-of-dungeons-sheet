/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useMemo, useContext } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterAttributes } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { Block } from 'src/components/shared/Block/Block';
import { AttributeScoreRange } from 'src/state/models/Character';

export interface AttributesProps {
  [key: string]: any;
}

interface AttributeBlockProps {
  name: string,
  score: AttributeScoreRange
}

const attributeNameStyle = css`
  display: inline-block;
  font-size: 25px;
  padding: 4px;
`;

const attributeScoreStyle = css`
  display: inline-block;
  font-size: 25px;
  padding: 4px;
`;

const AttributeBlock: React.FC<AttributeBlockProps> = ({ name, score }) => {
  return (
    <Block size={1}>
      <div css={attributeScoreStyle}>
        { score }
      </div>
      <div css={attributeNameStyle}>
        { name }
      </div>
    </Block>
  );
}

const attributeContainerStyle = css`
  display: flex;
  flex-direction: row wrap;
`;

export const Attributes: React.FC<AttributesProps> = ({}) => {
  const state = useContext(StateContext);
  const attributes = useMemo(() => getSelectedCharacterAttributes(state), [state[CharacterStateKey]]);
  return (<div>
    <Block>
      Attributes:
    </Block>
    <div css={attributeContainerStyle}>
      {
        attributes 
        ? Object
          .keys(attributes)
          .map((attName) => <AttributeBlock key={attName} name={attName} score={attributes[attName]} />) 
        : null
      }
    </div>
  </div>);
}