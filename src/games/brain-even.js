import startGame from '..';
import getRandomNumber from '../utilites';
import { cons } from 'hexlet-pairs';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => (number % 2 === 0 ? 'yes' : 'no');

const taskGame = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = isEven(randomNumber);
  return cons(randomNumber, correctAnswer);
};

export default () => startGame(description, taskGame);
