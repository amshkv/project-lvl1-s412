import { cons } from 'hexlet-pairs';
import startGame from '../gameEngine';
import getRandomNumber from '../utilites';

const description = 'Balance the given number.';

const getBallanceNumber = (number) => {
  const arraySortedFromNumber = String(number)
    .split('')
    .map(n => Number(n))
    .sort();

  const iter = (arr) => {
    const arrLength = arr.length - 1;
    const minNumber = arr[0];
    const maxNumber = arr[arrLength];
    if (maxNumber - minNumber <= 1) {
      return arr;
    }
    const arrayFromIter = arr;
    const sumMaxAndMin = maxNumber + minNumber;
    const min = Math.round(sumMaxAndMin / 2);
    const max = sumMaxAndMin - min;
    arrayFromIter[0] = min;
    arrayFromIter[arrLength] = max;
    arrayFromIter.sort();
    return iter(arrayFromIter);
  };

  const ballanceNumber = iter(arraySortedFromNumber).join('');
  return ballanceNumber;
};
const taskGame = () => {
  const question = getRandomNumber(100, 9999);
  const answer = getBallanceNumber(question);
  return cons(question, answer);
};

export default username => startGame(description, taskGame, username);
