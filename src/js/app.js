import Game, { GameSavingData as GameData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';

const game = new Game();
game.start();
