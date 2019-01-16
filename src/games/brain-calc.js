import startGame from '..';
import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utilites';

const description = 'What is the result of the expression?';

const taskGame = () => {
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  const numberOfRandomOperation = getRandomNumber(0, 2);

  let question;
  let answer;
  switch (numberOfRandomOperation) {
    case 1:
      question = `${firstOperand} + ${secondOperand}`;
      answer = firstOperand + secondOperand;
      break;
    case 2:
      question = `${firstOperand} - ${secondOperand}`;
      answer = firstOperand - secondOperand;
      break;
    default:
      question = `${firstOperand} * ${secondOperand}`;
      answer = firstOperand * secondOperand;
  }
  return cons(question, String(answer));
};

export default () => startGame(description, taskGame);
