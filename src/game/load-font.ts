import { Assets } from 'pixi.js';


export async function loadFont() {
  // https://pixijs.com/8.x/examples/text/from-font
  Assets.addBundle('fonts', {
    VarelaRound: {
      src: `${process.env.SUBPATH ?? ''}/placeholders/font/VarelaRound-Regular.ttf`,
      data: { family: 'VarelaRound' },
    },
  });
  await Assets.loadBundle('fonts');
}
