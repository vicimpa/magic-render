import { Vec2 } from "class/Vec2";

import { canvasResizer } from "./canvasResizer";
import { makeLooper } from "./makeLooper";

const cropMin = new Vec2(0);
const cropMax = new Vec2(1);

export const makeCanvas = (target?: Element, ancorX: number = 0, ancorY = ancorX): [HTMLCanvasElement, CanvasRenderingContext2D, Vec2] => {
  const canvas = document.createElement('canvas')!;
  const context = canvas.getContext('2d')!;
  const anchor = new Vec2(ancorX, ancorY);
  target?.appendChild(canvas);
  canvasResizer(canvas, target);
  makeLooper(() => {
    const size = Vec2.fromSize(canvas);
    anchor.cropMin(cropMin);
    context.resetTransform();
    context.clearRect(0, 0, size);
    context.setTransform(1, 0, 0, 1, size.times(
      anchor
        .cropMin(cropMin)
        .cropMax(cropMax)
    ));
  });
  return [canvas, context, anchor];
};