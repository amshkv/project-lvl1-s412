import { cons } from 'hexlet-pairs';
import startGame from '../gameEngine';
import getRandomNumber from '../utilites';

const description = 'Balance the given number.';

const taskGame = () => {
  const question = getRandomNumber(100, 9999);
  const answer = question;
  return cons(question, String(answer));
};

export default username => startGame(description, taskGame, username);
