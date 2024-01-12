import { Vec2 } from "class/Vec2";
import { fromPath } from "utils/fromPath";
import { makeCanvas } from "utils/makeCanvas";
import { makeLooper } from "utils/makeLooper";
import { PI2, rem } from "utils/math";

const [can, ctx] = makeCanvas(document.body, .5);

const START = new Vec2();
const ANGLE = new Vec2(0, PI2);
const radius = 100;

console.log(rem(-6, 10), -1 % 10);

makeLooper(
  (_time, _dtime) => {
    const size = Vec2
      .fromSize(can)
      .times(.2)
      .plus(radius, 0);

    fromPath(ctx, () => {
      ctx.arc(
        Vec2
          .fromAngle(_time * .002)
          .times(size)
          .times(1, 1)
        ,
        radius,
        ANGLE
      );
      ctx.fill();
    });
  }
);