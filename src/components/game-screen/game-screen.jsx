import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getCellsToClick, getDimention, getField } from '@/reducer/app/selectors';
import { AppActionCreators } from '@/reducer/app';

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

const GameScreen = ({
  field, cellsToClick, onClick, dimention,
}) => {
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
            cellsToClick.includes(index) ? () => onClick(index) : null
          }
        >
          {el}
        </Cell>
      ))}
    </Field>
  );
};

GameScreen.propTypes = {
  field: PropTypes.arrayOf(PropTypes.number).isRequired,
  cellsToClick: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClick: PropTypes.func.isRequired,
  dimention: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  field: getField(state),
  cellsToClick: getCellsToClick(state),
  dimention: getDimention(state),
});

const mapDispatchToProps = dispatch => ({
  onClick: index => dispatch(AppActionCreators.moveCell(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
