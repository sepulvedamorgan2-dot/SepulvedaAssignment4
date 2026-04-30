//self explanatory
const renderAreaEle = document.getElementById('outputarea');
//filtered
const filterCategoryEle = document.getElementById('filtercategory');
const filtertitleEle = document.getElementById('filtertitle');
const filtercompletedEle = document.getElementById('filtercompleted');
//add task
const addcategoryEle = document.getElementById('category');
const addtitleEle = document.getElementById('title');
const adddescriptionEle = document.getElementById('description');
//forms
const filterFormEle = document.getElementById('filterform');
const addFormEle = document.getElementById('addtaskform');

let taskId = 0
class Task {
    constructor(title, description, category, isCompleted = false) {
        this.id = ++taskId
        this.title = title
        this.description = description
        this.category = category
        this.isCompleted = isCompleted
    }
}
const tasks = [
    new Task('Clean kitchen', 'Wash dishes and wipe counters', 'Chore', false),
    new Task('Laundry', 'Wash, dry, and fold clothes', 'Chore', false),
    new Task('Take out trash', 'Empty bins and replace liners', 'Chore', false),
    new Task('Prep lunches', 'Make meals for the week', 'Meal Prep', false),
    new Task('Cook dinner', 'Prepare a balanced meal', 'Meal Prep', false),
    new Task('Freeze snacks', 'Portion out snacks for later', 'Meal Prep', false),
    new Task('Math assignment', 'Finish chapter 5 problems', 'Homework', false),
    new Task('Read history', 'Review notes for quiz', 'Homework', false),
    new Task('Change air filter', 'Replace HVAC filter', 'Maintenance', false),
    new Task('Check smoke detectors', 'Test batteries and functionality', 'Maintenance', false)
];

addFormEle.addEventListener('submit', function (e) {
    e.preventDefault();
    if(addcategoryEle.value === ''){
        alert('Please Select a category')
        return;
    }
    const taskToAdd = new Task(addtitleEle.value, adddescriptionEle.value, addcategoryEle.value, false)
    tasks.push(taskToAdd);
    filterTasks();
    this.reset();

})
function filterTasks() {
    tasks.forEach(task => {
        renderTask(task)

    });
}
function renderTask(task) {
    const eleToAdd = document.createElement('div')
    eleToAdd.innerHTML = `<div data-id="${task.id}" class="taskcard">
            <img src="/src/images/${task.category}.jpg" alt="">
                <div id="test>
                    <section class="row">
                        <h3>${task.title}</h3>
                        <h3 id="mediaDel"> / </h3>
                        <h3 id="mediaShrink">${task.category}</h3>
                    </section>
                    <p>${task.description}</p>
                </div>
                <section class="icon">
                    <p><i class="bi bi-check-square-fill"></i> </p>
                </section>
        </div>`
    renderAreaEle.innerHTML += eleToAdd.innerHTML;
}

filterTasks()
