import{Task} from './index.js';
let taskId = 0;

export function returnLocalStorage(keyString) {
    let tasks;
    if (localStorage.getItem(keyString) === null) {
        tasks = [
            
        ];
    } else {
        tasks = JSON.parse(localStorage.getItem(keyString));
    }
    return tasks;
}
export function setLocalStorage(tasks, keyString) {
    localStorage.setItem(keyString, JSON.stringify(tasks));
}

