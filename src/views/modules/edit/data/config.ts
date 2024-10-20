import WallBlack from '@/assets/wall/wall_black.png';
import WallRed from '@/assets/wall/wall_red.png';


export const paintConfig = ref<PaintStyle>({
  /*  */
  image: WallBlack,
  /* 障碍物类型 */
  obstacleType: 'wall',
});

export const paintConfigList = [
  {
    title: '黑白',
    value: WallBlack,
  },
  {
    title: '红色',
    value: WallRed,
  },
];

export const obstacleTypeList: { type: Paint; label: string }[] = [
  {
    type: 'wall',
    label: '绘制墙',
  },
  {
    type: 'monster',
    label: '绘制怪物',
  },
];
