import React from 'react';
import { GameScreen } from 'components/game-screen';
import { GreatingScreen } from 'components/greating-screen';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppActionCreators } from '@/redux/app';
import {
  getCellsToClick, getDimention, getField, getFinishStatus, getStartStatus,
} from '@/redux/app/selectors';
import { AppPropsType } from '@/types/components/app';
import { AppActionType } from '@/types/redux/app-reducer';
import { FullStateType } from '@/types/general-types';

export const PureApp: React.FunctionComponent<AppPropsType> = ({
  isStarted,
  isFinished,
}: AppPropsType) => (
  <>
    {!isStarted ? <GreatingScreen /> : null}
    {!isFinished && isStarted ? (
      <GameScreen />
    ) : null}
  </>
);

const mapStateToProps = (state: FullStateType) => ({
  field: getField(state),
  cellsToClick: getCellsToClick(state),
  dimention: getDimention(state),
  isStarted: getStartStatus(state),
  isFinished: getFinishStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch<AppActionType>) => ({
  onClick: (index:number) => dispatch(AppActionCreators.moveCell(index)),
});

export const App = connect(mapStateToProps, mapDispatchToProps)(PureApp);
