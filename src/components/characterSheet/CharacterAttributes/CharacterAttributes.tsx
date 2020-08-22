/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useMemo, useContext } from 'react';
import { StateContext } from 'src/App';
import { getSelectedCharacterAttributes } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { AttributeScoreRange, PhysicalAttribute } from 'src/state/models/Character';
import { MentalAttribute } from '../../../state/models/Character';

interface AttributeBlockProps {
  name: string,
  score: AttributeScoreRange
}

const attributeNameStyle = css({
  display: 'inline-block',
  fontSize: '45px',
  padding: '4px',
});

const scoreBoxLength = '3.5rem';

const attributeScoreStyle = css({
  display: 'inline-block',
  fontSize: '25px',
  padding: '4px',
  border: '1px solid black',
  height: `${scoreBoxLength}`,
  width: `${scoreBoxLength}`,
  textAlign: 'center',
  lineHeight: `${scoreBoxLength}`,
});

const attributeBox = css({});

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

const attributeContainerStyle = css({
  display: 'flex',
  'flex-direction': 'row wrap',
  backgroundColor: '#fff',
});

const attributeColumnStyle = css({
  flex: 1,
})

const flexContainer = css({
  display: 'flex',
  'flex-direction': 'column',
  height: '100%',
});

export const CharacterAttributes: React.FC = () => {
  const state = useContext(StateContext);
  const attributes = useMemo(() => getSelectedCharacterAttributes(state), [state[CharacterStateKey]]);

  return (
    <div css={flexContainer}>
      <div>
        Attributes:
      </div>
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