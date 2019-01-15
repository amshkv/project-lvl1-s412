import startGame from '..';
import getRandomNumber from '../utilites';
import { cons } from 'hexlet-pairs';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;

const taskGame = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => startGame(description, taskGame);
