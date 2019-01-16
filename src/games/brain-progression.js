import { cons } from 'hexlet-pairs';
import startGame from '../gameEngine';
import getRandomNumber from '../utilites';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (progressionStep, progressionStartEl, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const item = progressionStartEl + progressionStep * i;
    progression.push(item);
  }
  return progression;
};

const taskGame = () => {
  const progressionStep = getRandomNumber(1, 10);
  const progressionStartEl = getRandomNumber();

  const progression = getProgression(progressionStep, progressionStartEl, progressionLength);
  const randomElFromProgression = getRandomNumber(0, progressionLength - 1);

  const question = progression
    .map((element, index) => (index === randomElFromProgression ? '..' : element))
    .join(' ');

  const answer = String(progression[randomElFromProgression]);

  return cons(question, answer);
};

taskGame();
export default username => startGame(description, taskGame, username);
