import { correctFieldArrays } from '@/constants';
import { DimentionType } from '@/types/general-types';
import {
  AppActionConstType, AppActionType, AppInitialStateType, ChangeInputActionType, MoveCellActionType, StartGameActionType,
} from '@/types/redux/app-reducer';
import fieldCreator from '@/utils/field-creator';
import findCellsToClick from '@/utils/find-cells-to-click';

const initialState: AppInitialStateType = {
  field: [],
  emptyCell: null,
  cellsToClick: [],
  inputValue: 'three',
  isStarted: false,
  isFinished: false,
};

const ActionTypes: AppActionConstType = {
  MOVE_CELL: 'MOVE_CELL',
  CHANGE_INPUT: 'CHANGE_INPUT',
  START_GAME: 'START_GAME',
};

const ActionCreators = {
  moveCell: (data: number): MoveCellActionType => ({
    type: ActionTypes.MOVE_CELL,
    payload: data,
  }),

  changeInput: (data: DimentionType): ChangeInputActionType => ({
    type: ActionTypes.CHANGE_INPUT, payload: data,
  }),

  startGame: (): StartGameActionType => ({ type: ActionTypes.START_GAME }),
};

const reducer = (state: AppInitialStateType = initialState, action: AppActionType) => {
  switch (action.type) {
    case ActionTypes.START_GAME:
      const { startField, emptyCell } = fieldCreator(
        state.inputValue,
      );
      return {
        ...state,
        isStarted: true,
        isFinished: false,
        field: startField,
        emptyCell,
        cellsToClick: findCellsToClick(emptyCell, state.inputValue),
      };

    case ActionTypes.MOVE_CELL:
      const modifiedField = [...state.field];
      if (state.cellsToClick.includes(action.payload)) {
        if (state.emptyCell !== null) {
          modifiedField[state.emptyCell] = modifiedField[action.payload];
        }
        modifiedField[action.payload] = null;
      }
      if (
        !modifiedField[modifiedField.length - 1]
        && JSON.stringify(modifiedField)
          === JSON.stringify(correctFieldArrays[state.inputValue])
      ) {
        return {
          ...state,
          isFinished: true,
          isStarted: false,
          field: modifiedField,
          emptyCell: modifiedField.findIndex(el => !el),
          cellsToClick: [],
        };
      }
      return {
        ...state,
        field: modifiedField,
        emptyCell: modifiedField.findIndex(el => !el),
        cellsToClick: findCellsToClick(
          modifiedField.findIndex(el => !el),
          state.inputValue,
        ),
      };

    case ActionTypes.CHANGE_INPUT:
      return {
        ...state,
        inputValue: action.payload,
      };
    default:
      return state;
  }
};

export {
  reducer as appReducer,
  ActionCreators as AppActionCreators,
  ActionTypes as DataActionTypes,
};
