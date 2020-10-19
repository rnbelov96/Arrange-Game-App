import { FullStateType } from '@/types/general-types';
import {
  getCellsToClick,
  getDimention,
  getField,
  getFinishStatus,
  getStartStatus,
} from './selectors';

const mockFullInitialState: FullStateType = {
  app: {
    field: [null, 7, 6, 8, 4, 1, 3, 5, 2],
    emptyCell: 0,
    cellsToClick: [3, 1],
    inputValue: 'three',
    isStarted: true,
    isFinished: false,
  },
};

describe('Selector', () => {
  test('getField must return a field', () => {
    expect(getField(mockFullInitialState)).toEqual([
      null,
      7,
      6,
      8,
      4,
      1,
      3,
      5,
      2,
    ]);
  });

  test('getCellsToClick must return a cell list', () => {
    expect(getCellsToClick(mockFullInitialState)).toEqual([3, 1]);
  });

  test('getDimention must return current dimention', () => {
    expect(getDimention(mockFullInitialState)).toBe('three');
  });

  test('getStartStatus must return start status', () => {
    expect(getStartStatus(mockFullInitialState)).toBe(true);
  });

  test('getFinishStatus must return finish status', () => {
    expect(getFinishStatus(mockFullInitialState)).toBe(false);
  });
});
