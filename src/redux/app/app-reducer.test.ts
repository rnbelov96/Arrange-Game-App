import { AppInitialStateType } from '@/types/redux/app-reducer';
import { AppActionCreators, appReducer } from './app-reducer';

const mockAppInitialState: AppInitialStateType = {
  field: [null, 7, 6, 8, 4, 1, 3, 5, 2],
  emptyCell: 0,
  cellsToClick: [3, 1],
  inputValue: 'three',
  isStarted: true,
  isFinished: false,
};

describe('Reducer', () => {
  test('should move cell', () => {
    expect(
      appReducer(mockAppInitialState, AppActionCreators.moveCell(1)),
    ).toEqual({
      field: [7, null, 6, 8, 4, 1, 3, 5, 2],
      emptyCell: 1,
      cellsToClick: expect.arrayContaining([0, 2, 4]),
      inputValue: 'three',
      isStarted: true,
      isFinished: false,
    });
  });

  test('should finish the game', () => {
    const resultState = appReducer(
      {
        ...mockAppInitialState,
        field: [1, 2, 3, 4, 5, 6, 7, null, 8],
        cellsToClick: [8, 6, 4],
        emptyCell: 7,
      },
      AppActionCreators.moveCell(8),
    );
    expect(resultState.isFinished).toBe(true);
  });

  test('should start the game', () => {
    const resultState = appReducer(
      {
        ...mockAppInitialState,
        isStarted: false,
      },
      AppActionCreators.startGame(),
    );
    expect(resultState.isStarted).toBe(true);
  });

  test('should change input value', () => {
    const resultState = appReducer(
      mockAppInitialState,
      AppActionCreators.changeInput('five'),
    );
    expect(resultState.inputValue).toBe('five');
  });
});
