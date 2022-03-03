// Import the html file so that it is added to the bundle.
import './index.html';

// You can import images this way
import spaceshipPng from './spaceship.png';

import {Application, Sprite} from 'pixi.js';
import {appWindow} from '@tauri-apps/api/window';


const app = new Application({
  // You should also update tauri.config.json is you change width or height.
  width: 800,
  height: 600,
  backgroundColor: 0xEEEEEE // Put 0x000000 for black
});

document.body.appendChild(app.view);


const player = Sprite.from(spaceshipPng);

// Center the sprite's anchor point
player.anchor.set(0.5);

// Move the sprite to the center of the screen
player.x = app.renderer.width / 2;
player.y = app.renderer.height / 2;
player.scale.set(0.15);

app.stage.addChild(player);


// Listen for frame updates
app.ticker.add(() => {
  // Rotate player clockwise
  player.rotation += 0.02 * app.ticker.deltaTime;
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Esc' || e.key === 'Escape') {
    appWindow.close();
  }
  if (e.key === 'F11') {
    appWindow.isFullscreen().then((e) => {
      appWindow.setFullscreen(!e);
    });
  }
});
