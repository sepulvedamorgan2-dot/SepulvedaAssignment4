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
            new Task('Clean kitchen', 'Wash dishes and wipe counters', 'Chore', false),
            new Task('Laundry', 'Wash, dry, and fold clothes', 'Chore', true),
            new Task('Take out trash', 'Empty bins and replace liners', 'Chore', false),
            new Task('Prep lunches', 'Make meals for the week', 'Mealprep', false),
            new Task('Cook dinner', 'Prepare a balanced meal', 'Mealprep', true),
            new Task('Freeze snacks', 'Portion out snacks for later', 'Mealprep', false),
            new Task('Math assignment', 'Finish chapter 5 problems', 'Homework', true),
            new Task('Read history', 'Review notes for quiz', 'Homework', false),
            new Task('Change air filter', 'Replace HVAC filter', 'Maintenance', false),
            new Task('Check smoke detectors', 'Test batteries and functionality', 'Maintenance', false),
            new Task('Test LocalStorage', 'Sort and clean storage area', 'Maintenance', true)
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