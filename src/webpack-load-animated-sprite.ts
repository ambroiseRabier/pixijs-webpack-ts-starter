import {AnimatedSprite, BaseTexture, Spritesheet} from 'pixi.js';


/**
 *
 * @param png
 * @param json example:
 * example:
 * import turretPNG from './assets/turret/turret-head.png';
 * import turretJSON from './assets/turret/turret-head.json';
 * loadAnimatedSprite(turretPNG, turretJSON).then(animatedSprite => {
 *   let first = animatedSprite;
 *   let another = new AnimatedSprite(animatedSprite.textures);
 * });
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
