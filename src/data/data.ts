import { nanoid } from 'nanoid';

export const stageConfig = ref<Stage>({
  size: 60,
  width: 600,
  height: 600,
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
