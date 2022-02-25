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

If you don't need to export as a desktop app, you can remove Tauri dependencies and `src-tauri`, 
otherwise you should read https://tauri.studio/docs/getting-started/prerequisites .
And also:

> Especially during the alpha and beta phases, we expect you to keep all Tauri dependencies and toolchains up to date. 
> There is no support for any versions other than latest.

> The Tauri JS CLI has a command to install and update all needed dependencies, just run tauri deps install or tauri deps update.

https://tauri.studio/docs/development/updating-dependencies


### Hermit Pattern

https://tauri.studio/docs/architecture/recipes/hermit

> The Hermit recipe is a pattern for ultimate application isolation where all logic is self-contained in the 
> Window and the binary exists merely to bootstrap the Window. There is no communication back to Rust from the Window, 
> there is no localhost server, and the Window has no access to any remote resources. 
> The Hermit is great for interactive Kiosk Mode and standalone HTML based games.

```json5
{
  "tauri": {
    "allowlist": {
      "all": false,       // disable and tree-shake all api functions
    }
  }
}
```


## Tauri dev

```shell
npm run start # Start dev server first
npm run tauri dev
```


## Tauri build

```shell
npm run build # Build game first
npm run tauri build
```

On Windows, an msi installer will be created here: 
`pixijs-webpack-ts-starter\src-tauri\target\release\bundle\msi\pixijs-webpack-ts-starter_0.1.0_x64_en-US.msi`.
