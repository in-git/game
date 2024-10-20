import { hreoGifStep, stageConfig } from './data';

export const moveTo = (x: number, y: number) => {
  stageConfig.value.hero.left = x;
  stageConfig.value.hero.top = y;
};
export const getHeroFigure = (): string => {
  if (hreoGifStep.value >= 3) {
    hreoGifStep.value = 0;
  }
  hreoGifStep.value++;
  let map: Record<string, string> = {
    back: '32px',
    left: '96px',
    front: '0',
    right: '64px',
  };
  return map[stageConfig.value.hero.figure];
};
