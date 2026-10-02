export let arr = [
    { id: 1, name: "Arjun", age: 21, department: "CSE", marks: 85 },
    { id: 2, name: "Sam", age: 22, department: "MCA", marks: 75 },
    { id: 3, name: "Rahul", age: 21, department: "BCA", marks: 89 },
    { id: 4, name: "Barsha", age: 22, department: "MCA", marks: 95 },
    { id: 5, name: "Khushi", age: 21, department: "B.Tech", marks: 76 }
]

// Get all Student Name
export function allStudent() {
    return arr;
}

// Find Students by their id
export function findStudent(id) {
    return arr.find(arr => arr.id === id)
}

// Filter the student who scored above 80
export function goodStudent() {
    return arr.filter(arr => arr.marks >= 80)
}

//Average Marks of the Student
export function averageMark() {
    let sum = 0;
    for (let smark of arr) {
        sum += smark.marks;
    }
    return sum / arr.length
}