let formEle = document.getElementById('form-ele');
let inputEle = document.getElementById('task-input');
let listDisplay = document.getElementById('list-display');
let totalDisplay = document.getElementById('total-count');

let taskList = [
    {
        id: 101,
        task: 'Task 1',
        isCompleted: false,
        date: '9/4/2026, 10:33:24 AM'
    },
    {
        id: 102,
        task: 'Task 2',
        isCompleted: false,
        date: '9/4/2026, 11:33:24 AM'
    }
];


function displayItems() {

    let htmlCode = ``;

    taskList.forEach(function (task) {

        htmlCode += `
            <li class="list-group-item">

                <input type="checkbox" class="form-check-input" ${task.isCompleted?'checked':""} onchange='handlechange(event,${task.id})'>
                <span class="h5 mx-2 ${task.isCompleted?'text-danger':'text-success'}">
                    ${task.task}
                </span>

                <span class="text-secondary mx-2">
                    Created on: ${task.date}
                </span>
                <button 
                    id="delete-btn${task.id}"
                    class="btn float-end delete-btn btn btn-danger">
                    Delete
                </button>
                
            </li>
        `;
    });
    listDisplay.innerHTML = htmlCode;
}
displayItems();
totalDisplay.textContent = taskList.length;
formEle.addEventListener('submit', function (e) {
    e.preventDefault();
    let taskInputValue = inputEle.value;
    if (taskInputValue) {
        let newObj = {
            id: Math.trunc(Math.trunc() * 1000),
            task: taskInputValue,
            date: new Date().toLocaleString(),
            isCompleted: false
        };
        taskList.push(newObj);
        displayItems();
        inputEle.value = '';
        totalDisplay.textContent = taskList.length;
        localStorage.getItem("")
    } else {
        alert('Enter valid Input');
    }
});
// Delete Particular Task
listDisplay.addEventListener('click', function (e) {

    if (e.target.classList.contains('delete-btn')) {
        let id = Number(e.target.dataset.id);
        taskList = taskList.filter(function (task) {
            return task.id !== id;
        });
        displayItems();
        totalDisplay.textContent = taskList.length;
    }
});

function handlechange(e,id){
    console.log(e,id);
    let checkedTask = taskList.find(ele=>ele.id==id);
    if(checkedTask){
        checkedTask.isCompleted = e.target.checked;
        console.log(checkedTask);
        displayItems()
    }
}