import { MainScene } from './scenes/main-scene';
import { Constants } from './constants';

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Something New',
  url: 'http://lessand.ro',
  version: '0.1',
  width: Constants.GAME_WINDOW_WIDTH,
  height: Constants.GAME_WINDOW_HEIGHT,
  backgroundColor: 0x3a404d,
  type: Phaser.AUTO,
  parent: 'game',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: [MainScene],
  scale: {
    parent: 'gamediv',
    autoCenter: Phaser.Scale.CENTER_BOTH,
	mode: Phaser.Scale.FIT,
    width: Constants.GAME_WINDOW_WIDTH,
    height: Constants.GAME_WINDOW_HEIGHT
}
};
