This is starter for PixiJS.

It use:
- Typescript
- Webpack for bundling
- A development server
- NPM
- file-loader so that you can import image in code

You may want to update packages right after downloading:

```sh
npm i pixi.js@latest file-loader@latest webpack-cli@latest webpack-dev-server@latest ts-loader@latest webpack@latest typescript@latest gasp@latest 
```

- [Tauri](./docs/Tauri.md)

## Subfolder deployement

Remove the public folder in the path when sending it on the webserver. (todo fix that in build process)
For https://ambroise-rabier.dev/bomb-catcher/, correct subpath env var is `SUBPATH=/bomb-catcher`

## Animated sprites

I have made a helper function based on https://github.com/pixijs/pixijs/pull/3676 .
If you want to use pixiJS loader instead, you will need to use CopyWebpackPlugin to add
assets file in the build.
