import * as React from 'react';
import { useMemo, useContext } from 'react';
import { StateContext, DispatchContext } from 'src/App';
import { getSelectedCharacterHitPoints } from 'src/state/characters/characterSelectors';
import { CharacterStateKey } from 'src/state/characters/characterReducer';
import { setCharacterCurrentHitPointsAction } from 'src/state/characters/characterActions';
import { SimpleInput } from 'src/components/shared/SimpleInput/SimpleInput';
import { numberValidator } from 'src/utils/normalizers';

export interface HitPointsProps {
  [key: string]: any;
}

export const HitPoints: React.FC<HitPointsProps> = ({}) => {
  const state = useContext(StateContext);
  const hitPoints = useMemo(() => getSelectedCharacterHitPoints(state), [state[CharacterStateKey]]);

  const dispatch = useContext(DispatchContext);
  const setCharacterName = React.useCallback((name: any) => dispatch(setCharacterCurrentHitPointsAction(name)), [setCharacterCurrentHitPointsAction, dispatch]);

  return (
    <>
      <div>
        Hit Points
      </div>
      <div>
        { <SimpleInput
            fieldName={'currenthitPoints'}
            value={hitPoints}
            defaultValue={'0'}
            validator={numberValidator}
            onChange={setCharacterName}
        /> }
      </div>
    </>
  );
}