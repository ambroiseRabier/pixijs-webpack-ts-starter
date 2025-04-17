import { Application, Sprite, Ticker, Text, Container } from 'pixi.js';
import { useScreen } from '../helpers/use-screen';
import { textStyles } from './text-styles';

const assets = {
  // Using import instead of public folder allow for tree shaking to remove unused assets.
  // It also break webpack build instead of bundling your game with missing assets.
  // await import will load the path of the assets, not the asset itself.
  // easier to write than a lot of `import spaceshipPNG from '../assets/spaceship.png';`
  // has downside of making GameScreen function async.
  spaceship: (await import('../assets/spaceship.png')).default,
  // Less efficient approach, but it work as well.
  bunny: `${process.env.SUBPATH ?? ''}/bunny.png`
}

export function GameScreen(app: Application) {
  const container = new Container();
  let player: Sprite;
  let bunny: Sprite;
  let playBtn: Text;

  function update(ticker: Ticker) {
    player.rotation += 0.02 * ticker.deltaTime;
  }

  return useScreen({
    assets: assets,
    oneTimeSetup: () => {
      player = Sprite.from(assets.spaceship);
      bunny = Sprite.from(assets.bunny);

      // Static bunny position
      bunny.position.set(50, 50);

      // Center the sprite's anchor point
      player.anchor.set(0.5);

      // Move the sprite to the center of the screen
      player.x = app.renderer.width / 2;
      player.y = app.renderer.height / 2;
      player.scale.set(0.15);

      playBtn = new Text({ text: 'Play', style: textStyles.button });

      container.addChild(player);
      container.addChild(bunny);
      container.addChild(playBtn);
    },
    enable: () => {
      app.ticker.add(update);
      app.stage.addChild(bunny);
    },
    disable: () => {
      app.ticker.remove(update);
      app.stage.removeChild(bunny);
    }
  });
}
