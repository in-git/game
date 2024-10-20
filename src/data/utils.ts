import { stageConfig } from './data';

export const getLineX = () => Math.floor(stageConfig.value.width / stageConfig.value.size);

export const getLineY = () => Math.floor(stageConfig.value.height / stageConfig.value.size);
