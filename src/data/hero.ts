import { hero, hreoGifStep } from './data';

export const moveTo = (x: number, y: number) => {
  hero.value.left = x;
  hero.value.top = y;
};
export const getHeroFigure = (): string => {
  if(hreoGifStep.value>=3){
    hreoGifStep.value=0
  }
  hreoGifStep.value++;
  let map: Record<string, string> = {
    back: '32px',
    left: '96px',
    front: '0',
    right: '64px',
  };
  return map[hero.value.figure];
};
