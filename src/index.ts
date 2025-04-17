// Import the html file so that it is added to the bundle.
import './index.html';

import { loadFont } from './game/load-font';
import { App } from './game/App';
import { GameScreen } from './game/game.screen';

// If you have a preload without text, you may want to move this.
await loadFont();

const app = await App();

const gameScreen = GameScreen(app);
await gameScreen.load();
gameScreen.enable();


// set TAURI to false if you want to develop on web browser instead of Tauri.
// requiring it that way, also make the error not break this script here.
const TAURI = false;

if (TAURI) {
  require('./init-tauri');
}
