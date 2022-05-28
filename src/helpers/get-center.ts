import { Application, Point } from 'pixi.js';

export function getCenter(app:Application) {
  // Move the sprite to the center of the screen
  return new Point(
    app.renderer.width / 2 / app.renderer.resolution,
    app.renderer.height / 2 / app.renderer.resolution,
  );
}
