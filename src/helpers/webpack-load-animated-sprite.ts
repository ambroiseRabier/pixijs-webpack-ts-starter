import {AnimatedSprite, BaseTexture, Spritesheet} from 'pixi.js';


/**
 *
 * @param png
 * @param json example:
 * example:
 *
 * ```js
 * import turretPNG from './assets/turret/turret-head.png';
 * import turretJSON from './assets/turret/turret-head.json';
 * loadAnimatedSprite(turretPNG, turretJSON).then(animatedSprite => {
 *   let first = animatedSprite;
 *   let another = new AnimatedSprite(animatedSprite.textures);
 * });
 *
 * // or
 *
 * Promise.all([
 *   loadAnimatedSprite(turretPNG, turretJSON),
 *   loadAnimatedSprite(
 *     flameshotPNG,
 *     flameshotJSON
 *   )
 * ]).then(onLoadingComplete);
 *
 * let towerHead: AnimatedSprite;
 * let flameshot: AnimatedSprite;
 *
 * function onLoadingComplete (sprites: AnimatedSprite[]) {
 *   towerHead = sprites[0];
 *   towerHead.loop = false;
 *
 *   flameshot = sprites[1];
 *   flameshot.loop = true;
 *
 *   start();
 * }
 *
 * ```
 */
export function loadAnimatedSprite(png: string, json: any): Promise<AnimatedSprite> {
  return new Promise<AnimatedSprite>((resolve, reject) => {
    const baseTexture = new BaseTexture(png);
    const spritesheet = new Spritesheet(baseTexture, json);

    spritesheet.parse(function (textures) {
      // Callback: finished preparing spritesheet textures

      if (!textures) {
        reject('Textures undefined, go check your parameters.');
      } else {
        const turret = new AnimatedSprite(Object.values(textures));

        resolve(turret);
      }
    });
  });
}
