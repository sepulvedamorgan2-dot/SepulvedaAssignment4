const sidebar = document.getElementById("addtasksidebar");
const addTask = document.getElementById("addtask");
const sidebarHeader = document.getElementById("sidebaricon");
addTask.style.display = "none";

sidebar.addEventListener("click", function() {
    sidebar.style.display = "none";
    addTask.style.display = "flex";
});
sidebarHeader.addEventListener("click", function() {
    sidebar.style.display = "flex";
    addTask.style.display = "none";
});


