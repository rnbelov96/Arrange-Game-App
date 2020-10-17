import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Dispatch } from 'redux';
import { getCellsToClick, getDimention, getField } from '@/redux/app/selectors';
import { AppActionCreators } from '@/redux/app';
import { FullStateType } from '@/types/general-types';
import { AppActionType } from '@/types/redux/app-reducer';
import { GameScreenPropsType } from '@/types/components/game-screen';

const Field = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    width: 50vw;
    height: 50vw;
  }
  @media (max-width: 991px) {
    width: 60vw;
    height: 60vw;
  }
  @media (max-width: 767px) {
    width: 70vw;
    height: 70vw;
  }
  @media (max-width: 575px) {
    width: 75vw;
    height: 75vw;
  }
  width: 45vw;
  height: 45vw;
`;

const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #bbb7b7;
  color: #bbb7b7;
  cursor: pointer;
  font-size: 35px;
  font-weight: bold;
  @media (max-width: 575px) {
    font-size: 30px;
  }
`;

export const PureGameScreen: React.FunctionComponent<GameScreenPropsType> = ({
  field, cellsToClick, onClick, dimention,
}: GameScreenPropsType) => {
  const cellsWidth = {
    three: '33%',
    four: '25%',
    five: '20%',
  };
  return (
    <Field>
      {field.map((el, index) => (
        <Cell
          key={`${index + 1}-cell`}
          style={{ width: `${cellsWidth[dimention]}` }}
          onClick={
            cellsToClick.includes(index) ? () => onClick(index) : () => null
          }
        >
          {el}
        </Cell>
      ))}
    </Field>
  );
};
const mapStateToProps = (state: FullStateType) => ({
  field: getField(state),
  cellsToClick: getCellsToClick(state),
  dimention: getDimention(state),
});

const mapDispatchToProps = (dispatch: Dispatch<AppActionType>) => ({
  onClick: (index: number) => dispatch(AppActionCreators.moveCell(index)),
});

export const GameScreen = connect(mapStateToProps, mapDispatchToProps)(PureGameScreen);
