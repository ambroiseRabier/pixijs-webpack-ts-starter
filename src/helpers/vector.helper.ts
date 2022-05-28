import {Point} from 'pixi.js';

export function length(a: number, b: number) {
  return Math.sqrt(a * a + b * b);
}

export function normalize(p: Point) {
  return new Point(
    p.x / length(p.x, p.y),
    p.y / length(p.x, p.y)
  );
}
