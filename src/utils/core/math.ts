import { stageConfig } from '@/data/data';

/*  */
export const roundPosition = (
  e: MouseEvent,
): {
  x: number;
  y: number;
} => {
  let x = Math.floor(e.offsetX / stageConfig.value.size);
  let y = Math.floor(e.offsetY / stageConfig.value.size);
  return {
    x,
    y,
  };
};
