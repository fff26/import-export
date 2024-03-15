import Character from './domain.js';

class Game {
  start() {
    console.log('game started');
  }
}

class GameSavingData {
  // Какая-то логика для сохранения данных игры
}

function readGameSaving() {
  // Логика для чтения  и сохранения
}

function writeGameSaving() {
  // Логика для записи и сохранения
}

export default Game;
export { GameSavingData, readGameSaving, writeGameSaving };

