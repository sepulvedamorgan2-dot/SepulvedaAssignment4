
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
//alert
const alertEle = document.getElementById('alert')
const alertMessageEle = document.getElementById('alertmessage')
let alertCheck = true
const alertCheckEle = document.getElementById('alertCheck')
alertEle.style.opacity = 0;
alertEle.style.display = 'none';


let taskId = 0
class Task {
    constructor(title, description, category, isCompleted = false) {
        this.id = Number(++taskId)
        this.title = title
        this.description = description
        this.category = category
        this.isCompleted = isCompleted
    }
}
const tasks = [
    new Task('Clean kitchen', 'Wash dishes and wipe counters', 'Chore', false),
    new Task('Laundry', 'Wash, dry, and fold clothes', 'Chore', true),
    new Task('Take out trash', 'Empty bins and replace liners', 'Chore', false),
    new Task('Prep lunches', 'Make meals for the week', 'Mealprep', false),
    new Task('Cook dinner', 'Prepare a balanced meal', 'Mealprep', true),
    new Task('Freeze snacks', 'Portion out snacks for later', 'Mealprep', false),
    new Task('Math assignment', 'Finish chapter 5 problems', 'Homework', true),
    new Task('Read history', 'Review notes for quiz', 'Homework', false),
    new Task('Change air filter', 'Replace HVAC filter', 'Maintenance', false),
    new Task('Check smoke detectors', 'Test batteries and functionality', 'Maintenance', false)
];

addFormEle.addEventListener('submit', function (e) {

    e.preventDefault();
    if (addcategoryEle.value === '') {
        alert('Please Select a category')
        return;
    }
    const taskToAdd = new Task(addtitleEle.value, adddescriptionEle.value, addcategoryEle.value, false)
    tasks.push(taskToAdd);
    filterTasks();
    alertAnim(.5)
    alertMessageEle.textContent = "Task Saved Successfully"
    this.reset();

})
alertCheckEle.addEventListener('click', function() {
    console.log('test')
    if(alertCheckEle.textContent === 'Disable Alerts') {
        alertCheckEle.textContent = 'Enable Alerts'
    } else if (alertCheckEle.textContent === 'Enable Alerts') {
        alertCheckEle.textContent = 'Disable Alerts'
    }

    alertCheck = !alertCheck;
})

function alertAnim(speed) {
    if(!alertCheck) {return;}
    alertEle.style.display = 'block';
    alertEle.animate(
        [

            { opacity: (1) }
        ],
        {
            duration: (1000 * speed),
            iterations: 1,
            easing: 'linear',
            fill: "forwards"

        }
    )
    setTimeout(() => {
        alertEle.animate(
            [
                { opacity: 1 },
                { opacity: 1 }

            ],
            {
                duration: (3000 * speed),

            }

        )
        setTimeout(() => {
            alertEle.animate(
                [
                    { opacity: 1 },
                    { opacity: 0 }
                ],
                {
                    duration: (1000 * speed),
                    fill: "forwards"
                }

            )



            setTimeout(() => {
                alertEle.style.display = 'none';
            }, 1000);
        }, 2000 * speed);
    }, 2000 * speed);
}



filterCategoryEle.addEventListener('change', filterTasks);
filtertitleEle.addEventListener('keydown', filterTasks);
filtercompletedEle.addEventListener('change', filterTasks);
filterFormEle.addEventListener('submit', function (e) {
    e.preventDefault();
    filterTasks();
});

function filterTasks() {

    renderAreaEle.innerHTML = '';
    const filterCategory = filterCategoryEle.value;
    const filterTitle = filtertitleEle.value;
    const filterCompleted = filtercompletedEle.value;
    console.log(filterTitle)
    tasks.forEach(task => {
        let shouldRender = true;

        if (!(filterCategory == 'all' || filterCategory === task.category)) {
            shouldRender = false;
        }
        if (!(filterTitle === '' || String(task.title).toLowerCase().includes(filterTitle.toLowerCase()))) {
            shouldRender = false;
        }
        if (!(filterCompleted === 'all' || filterCompleted === String(task.isCompleted))) {
            shouldRender = false;
        }

        if (shouldRender) {
            renderTask(task);
        }

    });
}
function renderTask(task) {
    const eleToAdd = document.createElement('div')
    eleToAdd.innerHTML =
        `<div data-id="${task.id}" class="taskcard">
            <img src="/src/images/${task.category}.jpg" alt="">
                <div id="test">
                    <section id="test2">
                        <h3>${task.title}</h3>
                        <h3 id="mediaShrink">${task.category}</h3>
                    </section>
                    <p>${task.description}</p>
                </div>
                <section class="icon">
                    <p><i class="bi bi-check-square-fill ${task.isCompleted ? 'completed' : 'not-completed'}"></i><i class="bi bi-trash3-fill"></i> </p>
                </section>
        </div>`
    renderAreaEle.innerHTML += eleToAdd.innerHTML;
}

document.getElementById('outputarea').addEventListener('click', function (e) {
    const idd = Number(e.target.closest('.taskcard').dataset.id)
    console.log(idd)
    if (e.target.classList.contains('bi-trash3-fill')) {
        console.log('no')
        const pop = tasks.findIndex(function (task) {
            if (task.id === idd) {
                return true
            }
            return false
        })
        if (confirm(`Are you sure you want to delete the task: ${tasks[pop].title}`)) {
            tasks.splice(pop, 1)
            filterTasks()
            alertAnim(.3)
            alertMessageEle.textContent = "Task Deleted"
            return
        }

    }

    if (e.target.classList.contains('not-completed')) {
        console.log('no')
        const test = tasks.filter(function (task, i) {

            if (task.id === idd) {
                task.isCompleted = true
                filterTasks()
                alertAnim(.3)
                alertMessageEle.textContent = "Task Completed"
                return true

            }
            return false
        })


    }
    if (e.target.classList.contains('completed')) {
        console.log('no')
        const test = tasks.filter(function (task, i) {

            if (task.id === idd) {
                task.isCompleted = false
                filterTasks()
                alertAnim(.5)
                alertMessageEle.textContent = "Task Incomplete"
                return true

            }
            return false
        })


    }

})


filterTasks()
