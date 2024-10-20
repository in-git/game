import { moveX, moveY } from '@/data/actions';
import { onKeyStroke } from '@vueuse/core';
import { stageConfig } from './data';

onKeyStroke('ArrowDown', e => {
  e.preventDefault();
  stageConfig.value.hero.figure = 'front';
  moveY(1);
});
onKeyStroke('ArrowUp', e => {
  stageConfig.value.hero.figure = 'back';
  e.preventDefault();
  moveY(-1);
});
onKeyStroke('ArrowLeft', e => {
  stageConfig.value.hero.figure = 'left';
  e.preventDefault();
  moveX(-1);
});
onKeyStroke('ArrowRight', e => {
  stageConfig.value.hero.figure = 'right';
  e.preventDefault();
  moveX(1);
});
