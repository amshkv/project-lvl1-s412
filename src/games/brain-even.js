import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.round(Math.random() * 100);

const isEven = number => (number % 2 === 0 ? 'yes' : 'no');

const game = () => {
  const numberOfCorrectAnswer = 3;

  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);

  for (let i = 0; i < numberOfCorrectAnswer; i += 1) {
    const randomNumber = getRandomNumber();
    const correctAnswer = isEven(randomNumber);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}!`);
};

export default game;
