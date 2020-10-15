import fieldCreator from '@/utils/field-creator';
import findCellsToClick from '@/utils/find-cells-to-click';

const initialState = {
  field: [],
  emptyCell: null,
  cellsToClick: [],
  inputValue: 'three',
  correctCellsArray: [],
  isStarted: false,
  isFinished: false,
};

const ActionTypes = {
  MOVE_CELL: 'MOVE_CELL',
  CHANGE_INPUT: 'CHANGE_INPUT',
  START_GAME: 'START_GAME',
};

const ActionCreators = {
  moveCell: data => ({
    type: ActionTypes.MOVE_CELL,
    payload: data,
  }),

  changeInput: data => ({ type: ActionTypes.CHANGE_INPUT, payload: data }),

  startGame: () => ({ type: ActionTypes.START_GAME }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.START_GAME:
      const { startField, correctCellsArray, emptyCell } = fieldCreator(
        state.inputValue,
      );
      return {
        ...state,
        isStarted: true,
        isFinished: false,
        field: startField,
        emptyCell,
        cellsToClick: findCellsToClick(emptyCell, state.inputValue),
        correctCellsArray,
      };

    case ActionTypes.MOVE_CELL:
      const modifiedField = [...state.field];
      if (state.cellsToClick.includes(action.payload)) {
        modifiedField[state.emptyCell] = modifiedField[action.payload];
        modifiedField[action.payload] = null;
      }
      if (
        !modifiedField[modifiedField.length - 1]
        && JSON.stringify(modifiedField)
          === JSON.stringify(state.correctCellsArray)
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
