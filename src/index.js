import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const startGame = (descriptionText, gameTask) => {
  const numberOfCorrectAnswer = 3;

  console.log('Welcome to the Brain Games!');
  console.log(descriptionText);
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  let step = 0;
  while (step < numberOfCorrectAnswer) {
    const task = gameTask();
    const question = car(task);
    const correctAnswer = String(cdr(task));
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!!`);
      return;
    }
    console.log('Correct!');
    step += 1;
  }
  console.log(`Congratulations, ${username}!`);
};

export default startGame;
