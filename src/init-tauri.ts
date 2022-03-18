import {appWindow} from '@tauri-apps/api/window';


// Press Escape to exit game
// Press F11 for fullscreen
window.addEventListener('keydown', (e) => {
  if (e.key === 'Esc' || e.key === 'Escape') {
    appWindow.close();
  }
  if (e.key === 'F11') {
    appWindow.isFullscreen().then((e) => {
      appWindow.setFullscreen(!e);
    });
  }
});
