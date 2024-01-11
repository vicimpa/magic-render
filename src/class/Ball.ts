import { fromPath } from "utils/fromPath";
import { PI2 } from "utils/math";

import { Vec2 } from "./Vec2";

const ANGLE = new Vec2(0, PI2);

export class Ball extends Vec2 {
  r = 10;
  c = '#f00';

  render(ctx: CanvasRenderingContext2D) {
    fromPath(ctx, () => {
      ctx.fillStyle = this.c;
      ctx.arc(this, this.r, ANGLE);
      ctx.fill();
    });
  }
}