import { stageConfig } from './data';

export const setContainerSize = (width: number, height: number) => {
  stageConfig.value.width = width;
  stageConfig.value.height = height;
};
