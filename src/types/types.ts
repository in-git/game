type Obstacle = {
  x: number;
  y: number;
  /* 墙,道具 */
  type: 'wall' | 'prop';
  id: string;
};
type ObstaclePos = {
  x: number;
  y: number;
};
type Stage = {
  size: number;
  width: number;
  height: number;
};

type Hero = {
  left: number;
  top: number;
  /* 人物姿态 */
  figure: 'left' | 'front' | 'back' | 'right';
};
