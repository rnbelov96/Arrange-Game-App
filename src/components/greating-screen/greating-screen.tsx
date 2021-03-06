import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { AppActionCreators } from '@/redux/app/app-reducer';
import { getDimention, getFinishStatus } from '@/redux/app/selectors';
import { AppActionType } from '@/types/redux/app-reducer';
import { DimentionType, FullStateType } from '@/types/general-types';
import { GreatingScreenPropsType } from '@/types/components/greating-screen';

const Container = styled.div`
  width: 50vw;
  background-color: #bbb7b7;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 520px) {
    width: 75vw;
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`;

const Text = styled.h2`
  text-align: center;
  margin-top: 20px;
`;

const Select = styled.select`
  width: 50%;
  text-align: center;
`;

const StartButton = styled.button`
  padding: 6px 20px;
  text-transform: uppercase;
  margin-top: 10px;
  cursor: pointer;
  border: 1px solid #bbb;
  overflow: visible;
  font: bold 13px arial, helvetica, sans-serif;
  text-decoration: none;
  white-space: nowrap;
  color: #555;

  background-color: #ddd;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(255, 255, 255, 1)),
    to(rgba(255, 255, 255, 0))
  );
  background-image: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
  background-image: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
  background-image: -ms-linear-gradient(
    top,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
  background-image: -o-linear-gradient(
    top,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
  background-image: linear-gradient(
    top,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );

  -webkit-transition: background-color 0.2s ease-out;
  -moz-transition: background-color 0.2s ease-out;
  -ms-transition: background-color 0.2s ease-out;
  -o-transition: background-color 0.2s ease-out;
  transition: background-color 0.2s ease-out;
  background-clip: padding-box; /* Fix bleeding */
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  -moz-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(255, 255, 255, 0.3) inset;
  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3),
    0 2px 2px -1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.3) inset;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(255, 255, 255, 0.3) inset;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    background-color: #eee;
    color: #555;
  }

  &:active {
    background: #e9e9e9;
    position: relative;
    top: 1px;
    text-shadow: none;
    -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;
  }
`;

export const PureGreatingScreen: React.FunctionComponent<GreatingScreenPropsType> = ({
  dimention, onInputChange, onStart, isFinished,
}: GreatingScreenPropsType) => (
  <Container>
    <Title>{isFinished ? 'WINNER!!!' : 'Arrange Game'}</Title>
    <Text>Chose dimention:</Text>
    <Select value={dimention} onChange={e => onInputChange(e.target.value as DimentionType)}>
      <option value="three">three</option>
      <option value="four">four</option>
      <option value="five">five</option>
    </Select>
    <StartButton onClick={onStart} type="button">
        Start
    </StartButton>
  </Container>
);

const mapStateToProps = (state: FullStateType) => ({
  dimention: getDimention(state),
  isFinished: getFinishStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch<AppActionType>) => ({
  onInputChange: (value: DimentionType) => dispatch(AppActionCreators.changeInput(value)),
  onStart: () => dispatch(AppActionCreators.startGame()),
});

export const GreatingScreen = connect(mapStateToProps, mapDispatchToProps)(PureGreatingScreen);
