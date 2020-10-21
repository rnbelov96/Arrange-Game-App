import React from 'react';
import renderer from 'react-test-renderer';
import { PureGreatingScreen } from './greating-screen';

describe('GreatingScreen', () => {
  test('should render screen with greating message', () => {
    const tree = renderer
      .create(
        <PureGreatingScreen
          dimention="three"
          isFinished={false}
          onInputChange={() => {}}
          onStart={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render screen with winning message', () => {
    const tree = renderer
      .create(
        <PureGreatingScreen
          dimention="three"
          isFinished
          onInputChange={() => {}}
          onStart={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
