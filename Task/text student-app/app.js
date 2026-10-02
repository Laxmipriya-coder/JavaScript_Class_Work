import {allStudent,findStudent,goodStudent,averageMark} from './students.js'
import { changeCase,highScore,lowestScore } from './utils.js';
console.log(allStudent());
console.log(findStudent(3));
console.log(goodStudent());
console.log(`The average mark of student is ${averageMark()}`);
console.log(changeCase());
console.log(`${highScore()} secured highest mark`);
console.log(`${lowestScore()} secured lowest mark`);