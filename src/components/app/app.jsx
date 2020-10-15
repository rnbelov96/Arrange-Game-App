import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Greating from '../greating-screen/greating-screen';
import { AppActionCreators } from '@/reducer/app';
import {
  getCellsToClick, getDimention, getField, getFinishStatus, getStartStatus,
} from '@/reducer/app/selectors';
import GameScreen from '../game-screen/game-screen';

function App({
  isStarted,
  isFinished,
}) {
  return (
    <>
      {!isStarted ? <Greating /> : null}
      {!isFinished && isStarted ? (
        <GameScreen />
      ) : null}
    </>
  );
}

App.propTypes = {
  isStarted: PropTypes.bool.isRequired,
  isFinished: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    field: getField(state),
    cellsToClick: getCellsToClick(state),
    dimention: getDimention(state),
    isStarted: getStartStatus(state),
    isFinished: getFinishStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: index => dispatch(AppActionCreators.moveCell(index)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
