import { DimentionType } from '@/types/general-types';

export type AppInitialStateType = {
  field: (number | null)[],
  emptyCell: null | number,
  cellsToClick: number[],
  inputValue: DimentionType,
  isStarted: boolean,
  isFinished: boolean,
};

export type AppActionConstType = {
  MOVE_CELL: 'MOVE_CELL',
  CHANGE_INPUT: 'CHANGE_INPUT',
  START_GAME: 'START_GAME',
}

export type MoveCellActionType = {
  type: AppActionConstType['MOVE_CELL'],
  payload: number
}

export type ChangeInputActionType = {
  type: AppActionConstType['CHANGE_INPUT'],
  payload: DimentionType
}

export type StartGameActionType = {
  type: AppActionConstType['START_GAME'],
}

export type AppActionType = MoveCellActionType | ChangeInputActionType | StartGameActionType
