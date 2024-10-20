import { nanoid } from 'nanoid';


export const stageConfig = ref<Stage>({
  size: 36,
  width: innerWidth,
  height: innerHeight - 64,
  name: '',
  id: nanoid(),
  obstacles: [],
  hero: {
    left: 0,
    top: 0,
    figure: 'front',
  },
});
/* 动图姿态:范围0-4之间 */
export const hreoGifStep = ref(0);
