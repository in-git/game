import { moveX, moveY } from '@/data/actions';
import { onKeyStroke } from '@vueuse/core';
import { hero } from './data';

onKeyStroke('ArrowDown', e => {
  e.preventDefault();
  hero.value.figure = 'front';
  moveY(1);
});
onKeyStroke('ArrowUp', e => {
  hero.value.figure = 'back';
  e.preventDefault();
  moveY(-1);
});
onKeyStroke('ArrowLeft', e => {
  hero.value.figure = 'left';
  e.preventDefault();
  moveX(-1);
});
onKeyStroke('ArrowRight', e => {
  hero.value.figure = 'right';
  e.preventDefault();
  moveX(1);
});
