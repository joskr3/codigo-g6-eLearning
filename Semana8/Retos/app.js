// let array

class Task {
    constructor() {
        this.arrayTasks = [];
        
    }
    addTask(task) {
        this.arrayTasks.push(task);
        const container = document.getElementById('task-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="container-row">
                <div class="task">
                    <input type="checkbox" name="check" id="">${task}
                </div>
                <div class="prio-minor">MINOR</div>
                <div class="urgency-hastime">has time</div>
                <div class="length-10min">10min</div>
            </div>
        `;
        container.appendChild(element);
    }
}

class UI {
    resetForm() {
        document.querySelector('.container-row').reset();
    }
    setPrio(element) {
        if (element.className === 'prio-minor') {
            element.className = 'prio-medium';
            element.innerHTML = 'Medium';
        } else if (element.className === 'prio-medium') {
            element.className = 'prio-major';
            element.innerHTML = 'Major';
        } else if (element.className === 'prio-major'){
            element.className = 'prio-minor';
            element.innerHTML = 'Minor';
        }
    }
    setUrgency(element) {
        if (element.className === 'urgency-hastime') {
            element.className = 'urgency-tomorrow';
            element.innerHTML = 'Tomorrow';
        } else if (element.className === 'urgency-tomorrow') {
            element.className = 'urgency-today';
            element.innerHTML = 'Today';
        } else if (element.className === 'urgency-today'){
            element.className = 'urgency-hastime';
            element.innerHTML = 'Has time';
        }
    }
    setLength(element) {
        if (element.className === 'length-10min') {
            element.className = 'length-30min';
            element.innerHTML = '30min';
        } else if (element.className === 'length-30min') {
            element.className = 'length-1h';
            element.innerHTML = '1h';
        } else if (element.className === 'length-1h'){
            element.className = 'length-break';
            element.innerHTML = 'Break!';
        } else if (element.className === 'length-break'){
            element.className = 'length-10min';
            element.innerHTML = '10min';
        }
        
    }
}

// DOM Events

let tasks = new Task();

document.querySelector('.container-row').addEventListener('submit', (e) => {
    const toDoTask = document.getElementById('todo-task').value;
    // console.log(toDoTask);

    const ui = new UI();

    if (toDoTask === '') {
        alert ('Complete the field taks please')
        return e.preventDefault();
    }

    tasks.addTask(toDoTask)
    // console.log(tasks.arrayTasks)
    ui.resetForm();

    e.preventDefault();
})

document.getElementById('task-list').addEventListener('click', (e) => {
    const ui = new UI;
    ui.setPrio(e.target);
    ui.setUrgency(e.target);
    ui.setLength(e.target);
})
