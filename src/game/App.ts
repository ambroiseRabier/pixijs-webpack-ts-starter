import { Application } from 'pixi.js';
import { handleResize } from '../helpers/handle-resize';

export async function App() {
  const app = new Application();
  await app.init({
    // You should also update tauri.conf.json is you change width or height.
    width: 720,
    height: 1280,
    backgroundColor: 0xeeeeee,
    /**
     * FXAA
     */
    antialias: true,
    /**
     * Default it 1, if you plan to support high DPI screens, retina, 4k, high-end smartphones...
     * You may increase this to 2, but be aware graphic assets will have to double in size.
     */
    resolution: 1
  });

  handleResize(app);

  window.document.body.style.backgroundColor = '#272727';
  app.ticker.maxFPS = 144;

  document.body.appendChild(app.canvas);

  return app;
}
