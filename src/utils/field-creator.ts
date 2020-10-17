import { correctFieldArrays } from '@/constants';
import { DimentionType } from '@/types/general-types';

export default (dimention: DimentionType) => {
  const startField = [...correctFieldArrays[dimention]].sort(
    () => Math.random() - 0.5,
  );
  const emptyCell = startField.findIndex(el => !el);

  return {
    startField,
    emptyCell,
  };
};
