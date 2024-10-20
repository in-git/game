import { nanoid } from 'nanoid';
import { stageConfig } from './data';


export const createObstacle = (config: Obstacle) => {
  const target = stageConfig.value.obstacles.find(v => v.x === config.x && v.y === config.y);
  if (target) {
    return;
  }
  config.id = nanoid();
  stageConfig.value.obstacles.push(config);
};

export const hasTargetObstacle = (target: string | ObstaclePos) :boolean=> {
  let result = false;
  if (typeof target === 'string') {
    result = stageConfig.value.obstacles.findIndex(v => v.id === target) > -1;
  } else {
    result = stageConfig.value.obstacles.findIndex(v => v.x === target.x && v.y === target.y)> -1;
  }
  return result
};
