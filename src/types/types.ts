type Obstacle = {
  x: number;
  y: number;
  /* 墙,道具 */
  type: Paint;
  id: string;
  image: string;
};
type ObstaclePos = {
  x: number;
  y: number;
};
type Stage = {
  size: number;
  width: number;
  height: number;
  name: string;
  id: string;
  obstacles: Obstacle[];
  hero: Hero;
};

type Hero = {
  left: number;
  top: number;
  /* 人物姿态 */
  figure: 'left' | 'front' | 'back' | 'right';
};

type Paint = 'wall' | 'monster' | 'prop';
