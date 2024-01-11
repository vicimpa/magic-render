import { Vec2 } from "class/Vec2";

import { makeLooper } from "./makeLooper";

const observers = new WeakMap<Element, (entry: ResizeObserverEntry) => any>();

const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries)
    observers.get(entry.target)?.(entry);
});

export const canvasResizer = (canvas: HTMLCanvasElement, target?: Element) => {
  target = target ?? canvas.parentElement ?? undefined;

  if (!target)
    return;

  canvas.classList.add('renderer');

  const currentSize = Vec2.fromSize(canvas);
  const unloop = makeLooper(() => {
    if (!currentSize.equal(canvas.width, canvas.height))
      Object.assign(canvas, currentSize.size);
  });

  observers.set(target, ({ contentRect: { width, height } }) => {
    currentSize.set(width, height);
  });

  return (
    resizeObserver.observe(target),
    () => (resizeObserver.unobserve(target), unloop())
  );
};