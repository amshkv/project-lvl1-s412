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

const progressionLength = 10;

const getProgression = () => {
  const progressionStep = getRandomNumber(1, 10);
  const firstProgressionItem = consToList(getRandomNumber(), l());
  const iter = (step, acc) => {
    if (step === progressionLength) {
      return reverse(acc);
    }
    const item = head(acc) + progressionStep;
    return iter(step + 1, consToList(item, acc));
  };
  return iter(1, firstProgressionItem);
};

const taskGame = () => {
  const progression = getProgression();
  const randomElFromProgression = random(progression);
  const question = reduce(
    (item, acc) => (item === randomElFromProgression ? `${acc} ..` : `${acc} ${item}`),
    '',
    progression,
  );
  const answer = listToString(randomElFromProgression);
  return cons(question, answer);
};

export default () => startGame(description, taskGame);
