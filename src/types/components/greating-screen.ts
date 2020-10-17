import { DimentionType } from '../general-types';

export type GreatingScreenPropsType = {
  dimention: DimentionType,
  onInputChange: (value: DimentionType) => void,
  onStart: () => void,
  isFinished: boolean,
}
