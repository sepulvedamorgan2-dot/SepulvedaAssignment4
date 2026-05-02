let taskId = 0;
class Task {
    constructor(title, description, category, isCompleted = false) {
        this.id = Number(++taskId)
        this.title = title
        this.description = description
        this.category = category
        this.isCompleted = isCompleted
    }
}

export function returnLocalStorage() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [
            
        ];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
}
export function setLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}





console.log(returnLocalStorage());