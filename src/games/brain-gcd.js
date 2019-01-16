import startGame from '..';
import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utilites';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstOperand, secondOperand) => {
  const iterCount = Math.min(firstOperand, secondOperand);
  let result = 1;
  for (let i = 2; i <= iterCount; i += 1) {
    if (firstOperand % i === 0 && secondOperand % i === 0) {
      result = i;
    }
  }
  return result;
};

const taskGame = () => {
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  const question = `${firstOperand} ${secondOperand}`;
  const answer = String(getGCD(firstOperand, secondOperand));

  return cons(question, answer);
};

export default () => startGame(description, taskGame);
