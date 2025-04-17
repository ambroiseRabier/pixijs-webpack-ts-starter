import { Application } from 'pixi.js';

/**
 * Note: Device pixel ratio, zoom and high DPI, untested with this one
 */
export function handleResize(app: Application, allowUpscaleUpTo = 1) {
  const isPortrait = app.renderer.height > app.renderer.width;

  // If we have less space, downscale, if we have more, don't upscale.
  if (isPortrait) {
    app.canvas.style.height = `min(${app.renderer.height * allowUpscaleUpTo}px, 100vh)`;
  } else {
    app.canvas.style.width = `min(${app.renderer.width * allowUpscaleUpTo}px, 100vw)`;
  }
}
