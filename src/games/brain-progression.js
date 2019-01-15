import startGame from '..';
import {
  cons as consToList,
  l,
  head,
  toString as listToString,
  reverse,
  random,
  reduce,
} from 'hexlet-pairs-data';
import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utilites';

const description = 'What number is missing in the progression?';

const getProgression = (progressionStep, progressionStartEl, progressionLength) => {
  const iter = (step, acc) => {
    if (step === progressionLength) {
      return reverse(acc);
    }
    const item = head(acc) + progressionStep;
    return iter(step + 1, consToList(item, acc));
  };
  return iter(1, progressionStartEl);
};

const taskGame = () => {
  const progressionLength = 10;
  const progressionStep = getRandomNumber(1, 10);
  const progressionStartEl = cons(getRandomNumber(), l());

  const progression = getProgression(progressionStep, progressionStartEl, progressionLength);
  const randomElFromProgression = random(progression);
  const question = reduce(
    (item, acc) => (item === randomElFromProgression ? `${acc} ..` : `${acc} ${item}`),
    '',
    progression,
  ).trim();
  const answer = listToString(randomElFromProgression);
  return cons(question, answer);
};

export default () => startGame(description, taskGame);
