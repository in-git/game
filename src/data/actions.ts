import {stageConfig } from '@/data/data';
import { getLineX, getLineY } from './utils';

export const moveX = (direction = 1 | -1) => {
  const isMovingRight = direction > 0;
  const isMovingLeft = direction < 0;
  const heroLeft = stageConfig.value.hero.left;
  const heroTop = stageConfig.value.hero.top;
  const isOutOfBounds =
    (heroLeft - 1 < 0 && isMovingLeft) ||
    (heroLeft > getLineX() - direction - 1 && isMovingRight);

  const hasCollision = stageConfig.value.obstacles.find(e => {
    const nextPosition = heroLeft + direction;

    const isCollision =
      (isMovingRight && e.x === nextPosition && e.y === heroTop) ||
      (isMovingLeft && e.x + 1 === heroLeft && e.y === heroTop);

    if (isCollision) {
      return e;
    }
    return false;
  });

  if (isOutOfBounds || hasCollision) return;
  stageConfig.value.hero.left += direction;
};


export const moveY = (direction = 1 | -1) => {
  const heroTop = stageConfig.value.hero.top;
  const heroLeft = stageConfig.value.hero.left;
  const isMovingDown = direction > 0;
  const isMovingUp = direction < 0;
  const isOutOfBounds =
    (heroTop - 1 < 0 && isMovingUp) ||
    (heroTop > getLineY() - direction - 1 && isMovingDown);

  const hasCollision = stageConfig.value.obstacles.find(e => {
    const isCollision =
      (isMovingDown && e.y === heroTop + direction && e.x === heroLeft) ||
      (isMovingUp && e.y + 1 === heroTop && e.x === heroLeft);
    if (isCollision) {
      return e;
    }
    return false;
  });
  if (isOutOfBounds || hasCollision) return;
  stageConfig.value.hero.top += direction;
};
