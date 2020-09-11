/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useMemo, useContext, useCallback } from 'react';
import { StateContext, DispatchContext } from 'src/App';
import { getSelectedCharacterAttributes } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { AttributeScoreRange, PhysicalAttribute } from 'src/state/models/Character';
import { MentalAttribute } from '../../../state/models/Character';
import { SimpleAttributeInput } from 'src/components/shared/SimpleInput/SimpleInput';
import { setCharacterAttribute } from 'src/state/characters/characterActions';
import { numberNormalizer } from 'src/utils/normalizers';

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
  const dispatch = useContext(DispatchContext);
  const setAttribute = useCallback((newScore: string) => {
    dispatch(setCharacterAttribute(newScore, name))
  }, [setCharacterAttribute, name, dispatch]);

  const attributeValidator = useCallback((stringScore: string) => {
    const scoreToCheck = numberNormalizer(stringScore);
    return scoreToCheck > -1 && scoreToCheck < 4;
  }, [numberNormalizer]);

  return (
    <div css={attributeBox}>
      <div css={attributeScoreStyle}>
        <SimpleAttributeInput
            fieldName={name}
            value={score}
            defaultValue={'0'}
            validator={attributeValidator}
            onChange={setAttribute}
        />
      </div>
      <div css={attributeNameStyle}>
        { name }
      </div>
    </div>
  );
}

const attributeContainerStyle = css({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#fff',
});

const attributeColumnStyle = css({
  flex: 1,
})

const flexContainer = css({
  display: 'flex',
  flexDirection: 'column',
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