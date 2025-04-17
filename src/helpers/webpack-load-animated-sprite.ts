import {AnimatedSprite, Assets, Spritesheet} from 'pixi.js';


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
export async function loadAnimatedSprite(png: string, json: unknown): Promise<AnimatedSprite> {
  try {
    // Load the image (BaseTexture) using Assets.load
    const baseTexture = await Assets.load(png);

    // Create the spritesheet using the loaded BaseTexture and JSON data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const spritesheet = new Spritesheet(baseTexture, json as any);

    // Parse the spritesheet to generate textures
    await spritesheet.parse();

    // Create an AnimatedSprite from the parsed textures
    const animatedSprite = new AnimatedSprite(Object.values(spritesheet.textures));

    return animatedSprite;
  } catch (error) {
    throw new Error(`Failed to load animated sprite: ${error}`);
  }
}
