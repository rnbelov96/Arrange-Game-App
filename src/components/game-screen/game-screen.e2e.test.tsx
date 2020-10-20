import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PureGameScreen } from './game-screen';

configure({
  adapter: new Adapter(),
});

test('Cells onClick gets correct data and works on specific cells', () => {
  const onClickMock = jest.fn();

  const gameScreen = mount(
    <PureGameScreen
      dimention="three"
      field={[7, null, 6, 8, 4, 1, 3, 5, 2]}
      cellsToClick={[0, 2, 4]}
      onClick={onClickMock}
    />,
  );

  const clickableCellEl = gameScreen.find('div').at(1);
  const notClickableCellEl = gameScreen.find('div').at(7);

  clickableCellEl.simulate('click');
  notClickableCellEl.simulate('click');

  expect(onClickMock).toHaveBeenCalledTimes(1);
  expect(onClickMock).toHaveBeenNthCalledWith(1, 0);
});
