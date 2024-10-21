/* 画笔 */
interface PaintStyle {
  /* 样式 */
  image: string;
  /* 障碍物的类型 */
  obstacleType: ObstacleType;
  /* 精灵图的位置，当类型是monster时，读取这个值 */
  pos: number;
}
