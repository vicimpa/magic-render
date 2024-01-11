import { Vec2 } from "class/Vec2";
import { fromPath } from "utils/fromPath";
import { makeCanvas } from "utils/makeCanvas";
import { makeLooper } from "utils/makeLooper";
import { PI2 } from "utils/math";

const [, ctx] = makeCanvas(document.body, .5);

const START = new Vec2();
const ANGLE = new Vec2(0, PI2);

makeLooper(
  (_time, _dtime) => {
    fromPath(ctx, () => {
      ctx.arc(START, 100, ANGLE);
      ctx.fill();
    });
  }
);