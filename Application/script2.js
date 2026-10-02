let formEle = document.getElementById('form-ele');
let inputEle = document.getElementById('task-input');
let listDisplay = document.getElementById('list-display');
let totalDisplay = document.getElementById('total-count')

let taskList = [{ id: 101, task: 'Task 1', isCompleted: false, date: '9/4/2026, 10:33:24 AM' },
{ id: 102, task: 'Task 2', isCompleted: false, date: '9/4/2026, 11:33:24 AM' }
];

function displayItems() {
    let htmlCode = ``;

    taskList.forEach(function (task) {
        htmlCode += `<li class="list-group-item">
                        <input type="checkbox" class="form-check-input">
                        <span class="h5 mx-2">${task.task}</span>
                        <span class="text-secondary mx-2"> Created on: ${task.date}</span>
                        <button class="btn btn float-end" onclick="deleteBtn(${task.id})">Delete❌</button>
                    </li>`

    })
    listDisplay.innerHTML = htmlCode;
}

displayItems();
totalDisplay.textContent = taskList.length;

formEle.addEventListener('submit', function (e) {
    e.preventDefault();
    let taskInputValue = inputEle.value;
    if (taskInputValue) {
        let newObj = {
            id: Math.trunc(Math.random() * 1000),
            task: taskInputValue,
            date: new Date().toLocaleString(),
            isCompleted: false
        }
        taskList.push(newObj)
        console.log(taskList);
        displayItems();
        inputEle.value = '';
        totalDisplay.textContent = taskList.length;
    }
    else {
        alert('Enter valid Input')
    }
})

function deleteBtn(id) {
    taskList = taskList.filter(function (task) {
        return task.id !== id;
    });
    displayItems();
    totalDisplay.textContent = taskList.length;
}