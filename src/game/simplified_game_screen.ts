import { Application, Sprite } from 'pixi.js';

import spaceshipPNG from '../assets/spaceship.png';

// Simple example for PixiJS beginners, or if you want to make your own structure.
export function Game(app: Application) {
  // Not loading before will trigger a warning by PixiJS
  const player = Sprite.from(spaceshipPNG);

  // Center the sprite's anchor point
  player.anchor.set(0.5);

  // Move the sprite to the center of the screen
  player.x = app.renderer.width / 2;
  player.y = app.renderer.height / 2;
  player.scale.set(0.15);

  app.stage.addChild(player);

  app.ticker.add(() => {
    player.rotation += 0.02 * app.ticker.deltaTime;
  });

  const bunny = Sprite.from('/bunny.png');
  app.stage.addChild(bunny);
  bunny.position.set(50, 50);
}
