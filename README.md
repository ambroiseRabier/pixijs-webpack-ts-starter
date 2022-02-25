This is starter for PixiJS.

It use:
- Typescript
- Webpack for bundling
- A development server
- NPM
- file-loader so that you can import image in code

You may want to update packages right after downloading:

```sh
npm i pixi.js@latest file-loader@latest webpack-cli@latest webpack-dev-server@latest ts-loader@latest webpack@latest typescript@latest 
```


## Tauri

If you don't need to export as a desktop app, you can remove Tauri dependencies and `src-tauri`, otherwise you should read https://tauri.studio/docs/getting-started/prerequisites .
And also:

> Especially during the alpha and beta phases, we expect you to keep all Tauri dependencies and toolchains up to date. There is no support for any versions other than latest.

> The Tauri JS CLI has a command to install and update all needed dependencies, just run tauri deps install or tauri deps update.

https://tauri.studio/docs/development/updating-dependencies
