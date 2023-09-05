const taskInput = document.getElementById("task");
const priorityInput = document.getElementById("priority");
const taskList = document.getElementById("taskList");
const filterPriority = document.getElementById("filterPriority");

let tasks = [];

//add tasks function
function addTask() {
  const task = taskInput.value.trim();
  const priority = priorityInput.value;

  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  tasks.push({ task, priority });
  updateTaskList();
  taskInput.value = "";
}

//filter tasks function
function filterTasks() {
  const selectedPriority = filterPriority.value;

  if (selectedPriority === "All") {
    updateTaskList();
  } else {
    const filteredTasks = tasks.filter(
      (task) => task.priority === selectedPriority
    );
    updateTaskList(filteredTasks);
  }
}

//update tasks function
function updateTaskList(filteredTasks) {
  if (!filteredTasks) {
    filteredTasks = tasks;
  }

  taskList.innerHTML = "";

  filteredTasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${task.task}</span>
            <span class="task-priority">${task.priority}</span>
        `;
    taskList.appendChild(li);
  });
}
updateTaskList();
