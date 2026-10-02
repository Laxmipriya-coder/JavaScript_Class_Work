import { allStudent, arr } from "./students.js";
// Change to UpperCase
export function changeCase() {
    return arr.map((sname) => {
        return sname.name.toUpperCase();
    })
}

// Highest score
export function highScore() {
    let high = arr.reduce((greater, student) => {
        if (student.marks > greater.marks) {
            return student
        }
        else {
            return greater
        }
    });
    return high.name
}
console.log(highScore());

// Lowest Score
export function lowestScore() {
    let low = arr.reduce((lower, student) => {
        if (student.marks < lower.marks) {
            return student
        }
        else {
            return lower
        }
    });
    return low.name;
}
console.log(lowestScore());

