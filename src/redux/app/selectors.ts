import { FullStateType } from '@/types/general-types';

export const getField = (state: FullStateType) => state.app.field;

export const getCellsToClick = (state: FullStateType) => state.app.cellsToClick;

export const getDimention = (state: FullStateType) => state.app.inputValue;

export const getStartStatus = (state: FullStateType) => state.app.isStarted;

export const getFinishStatus = (state: FullStateType) => state.app.isFinished;
