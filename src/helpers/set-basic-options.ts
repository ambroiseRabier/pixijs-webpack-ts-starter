import { Application } from 'pixi.js';


export function setBasicOptions(app: Application) {
  window.document.body.style.backgroundColor = 'black';
  app.ticker.maxFPS = 144;

  // resize so that the entire canvas always stay visible. Should not impact gameplay.
  app.view.style.width = 'min(100vw, 960px)';
}
