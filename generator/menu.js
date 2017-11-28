const fs = require('fs-extra');
const inquirer = require('inquirer');
const generator = require('./generator');

const EXERCISES_DIR = 'exercises';
const exercisesList = fs.readdirSync(EXERCISES_DIR).map(item => item.substr(0, item.length - 3));

const menuConfig = [
  {
    type: 'list',
    name: 'exercise',
    message: 'Please choose an exercise',
    choices: [
      ...exercisesList,
      'Random'
    ],
  }
];

inquirer
  .prompt(menuConfig)
  .then(generator(exercisesList));
