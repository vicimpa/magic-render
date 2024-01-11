type TLoop = (time: number, dtime: number) => any;

var LOOP_SET = new Set<TLoop>();
var lastTime = -1;
var lastDeltaTime = -1;

const loop = (time: number) => {
  requestAnimationFrame(loop);

  if (lastTime < 0) {
    lastTime = time;
    return;
  }

  lastDeltaTime = time - lastTime;
  lastTime = time;

  for (const loopItem of LOOP_SET)
    loopItem(lastTime, lastDeltaTime);
};

requestAnimationFrame(loop);

export const makeLooper = (loop: TLoop) => (
  LOOP_SET.add(loop),
  () => {
    LOOP_SET.delete(loop);
  }
);