const fs = require('fs-extra');
const prepend = require('prepend');
const sed = require('shelljs').sed;

module.exports = exercises => answers => {
  const exerciseName = answers.exercise === 'Random' ? exercises[Math.floor(Math.random() * 3)] : answers.exercise;
  const exerciseReadme = `exercises/${exerciseName}.md`;

  const checkConditions = () => {
    if (fs.existsSync(`${process.cwd()}/src`) || fs.existsSync(`${process.cwd()}/test`)) {
      console.error('There is an already generated Kata, you should first do npm run clean');

      return -1;
    }
  };

  const copyBaseFiles = () => {
    fs.copySync(
      `${process.cwd()}/generator/Base/`,
      `${process.cwd()}`
    );
  };

  const replaceExerciseSpecificContent = () => {
    const readmeString = `/*\n${fs.readFileSync(exerciseReadme)}*/\n`;
    const paths = ['src/main.js', 'test/main.test.js'];

    paths.forEach(path => {
      prepend(`${process.cwd()}/${path}`, readmeString, (error) => {
        if (error)
          console.error(error.message);
      });

      sed('-i', 'ExerciseName', exerciseName, path);
    });
  };

  checkConditions();
  copyBaseFiles();
  replaceExerciseSpecificContent();

  console.info(`Generated ${exerciseName} exercise.`);
};
