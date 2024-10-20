import { nanoid } from 'nanoid';

export const obstacleList = ref<Obstacle[]>([]);

export const createObstacle = (config: Obstacle) => {
  const target = obstacleList.value.find(v => v.x === config.x && v.y === config.y);
  if (target) {
    return;
  }
  config.id = nanoid();
  obstacleList.value.push(config);
};

export const hasTargetObstacle = (target: string | ObstaclePos) :boolean=> {
  let result = false;
  if (typeof target === 'string') {
    result = obstacleList.value.findIndex(v => v.id === target) > -1;
  } else {
    result = obstacleList.value.findIndex(v => v.x === target.x && v.y === target.y)> -1;
  }
  return result
};
