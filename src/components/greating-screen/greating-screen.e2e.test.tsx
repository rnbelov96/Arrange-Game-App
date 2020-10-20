import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PureGreatingScreen } from './greating-screen';

configure({
  adapter: new Adapter(),
});

test('onStart start game', () => {
  const onStartMock = jest.fn();

  const greatingScreen = mount(
    <PureGreatingScreen
      dimention="three"
      isFinished={false}
      onInputChange={() => {}}
      onStart={onStartMock}
    />,
  );

  const startButtonEl = greatingScreen.find('button');

  startButtonEl.simulate('click');

  expect(onStartMock).toHaveBeenCalledTimes(1);
});

test('onInputChange gets correct data', () => {
  const onInputChange = jest.fn();

  const greatingScreen = mount(
    <PureGreatingScreen
      dimention="three"
      isFinished={false}
      onInputChange={onInputChange}
      onStart={() => {}}
    />,
  );

  const selectEl = greatingScreen.find('select');

  selectEl.simulate('change', { target: { value: 'four' } });

  expect(onInputChange).toHaveBeenNthCalledWith(1, 'four');
});
