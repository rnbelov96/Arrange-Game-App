import { DimentionType } from '../general-types';

export type GameScreenPropsType = {
  field: (number|null)[],
  cellsToClick: number[],
  onClick: ((index: number) => void),
  dimention: DimentionType,
}
