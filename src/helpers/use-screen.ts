import { Assets } from "pixi.js";


interface ScreenProps {
  /**
   * List of assets that your screen requires.
   */
  assets: Record<string, string>;
  /**
   * Initialization logic called each time this screen is re-used
   */
  enable: () => void;
  /**
   * Despawn unneeded object to clear memory
   */
  disable: () => void;
  /**
   * Called once at first enable call.
   */
  oneTimeSetup?: () => void;
}

export function useScreen(p: ScreenProps) {
  let loaded = false;
  let enabled = false;
  let oneTimeSetupCalled = false;

  function oneTimeSetup() {
    // Safeguard
    if (!loaded) { throw new Error('Screen not loaded'); }
    if (p.oneTimeSetup) {
      p.oneTimeSetup();
    }
  }

  return {
    /**
     * Before any usage of the screen, load it.
     */
    async load() {
      await Assets.load(Object.values(p.assets))
      loaded = true;
    },
    enable() {
      if (!loaded) { throw new Error('Screen not loaded'); }
      if (!oneTimeSetupCalled) {
        oneTimeSetupCalled = true;
        oneTimeSetup();
      }
      p.enable();
      enabled = true;
    },
    disable() {
      if (!enabled) { throw new Error('Screen not enabled'); }
      p.disable();
      enabled = false;
    }
  }
}

function consumer() {
  return useScreen({
    assets: {spaceship: ''},
    disable: () => {
      //
    },
    enable: () => {
      //
    }
  });
}
