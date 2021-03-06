import Phaser from "phaser";

import { DefaultScene } from "@scenes/templates";

/** Initial loading screen */
class InitScene extends Phaser.Scene {
  constructor() {
    super("InitConfig");
  }

  //////////////////////////////////////////////////////////////////////////////
  // BEGIN LIFECYCLE METHODS
  //////////////////////////////////////////////////////////////////////////////

  preload() {
    this.load.image("sky", "@assets/images/backgrounds/sky.png");
  }

  create() {
    this.scene.start("MainMenuScene");
  }

  update() {}

  //////////////////////////////////////////////////////////////////////////////
  // END LIFECYCLE METHODS
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // BEGIN LOGIC FUNCTIONS
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // END LOGIC FUNCTIONS
  //////////////////////////////////////////////////////////////////////////////
}

export default InitScene;
