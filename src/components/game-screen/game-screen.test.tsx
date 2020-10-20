import React from 'react';
import renderer from 'react-test-renderer';
import { PureGameScreen } from './game-screen';

describe('Game Screen', () => {
  test('should render correctly with 3 dimention', () => {
    const tree = renderer
      .create(
        <PureGameScreen
          dimention="three"
          field={[7, null, 6, 8, 4, 1, 3, 5, 2]}
          cellsToClick={[0, 2, 4]}
          onClick={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render correctly with 4 dimention', () => {
    const tree = renderer
      .create(
        <PureGameScreen
          dimention="four"
          field={[12, 14, null, 6, 13, 7, 9, 8, 1, 2, 3, 15, 4, 10, 5, 11]}
          cellsToClick={[6, 3, 1]}
          onClick={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render correctly with 5 dimention', () => {
    const tree = renderer
      .create(
        <PureGameScreen
          dimention="five"
          field={[
            17,
            10,
            20,
            13,
            15,
            23,
            6,
            11,
            5,
            null,
            2,
            8,
            3,
            1,
            19,
            22,
            16,
            4,
            7,
            9,
            18,
            24,
            21,
            14,
            12,
          ]}
          cellsToClick={[14, 4, 8]}
          onClick={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
