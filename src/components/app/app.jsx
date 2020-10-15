import React from 'react';
import GameScreen from 'components/game-screen/game-screen';
import Greating from 'components/greating-screen/greating-screen';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AppActionCreators } from '@/reducer/app';
import {
  getCellsToClick, getDimention, getField, getFinishStatus, getStartStatus,
} from '@/reducer/app/selectors';

const App = ({
  isStarted,
  isFinished,
}) => (
  <>
    {!isStarted ? <Greating /> : null}
    {!isFinished && isStarted ? (
      <GameScreen />
    ) : null}
  </>
);

App.propTypes = {
  isStarted: PropTypes.bool.isRequired,
  isFinished: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  field: getField(state),
  cellsToClick: getCellsToClick(state),
  dimention: getDimention(state),
  isStarted: getStartStatus(state),
  isFinished: getFinishStatus(state),
});

const mapDispatchToProps = dispatch => ({
  onClick: index => dispatch(AppActionCreators.moveCell(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
