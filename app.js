//Define UI Vars

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-task");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners

loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // add task event
  form.addEventListener("submit", addTask);
}

// add Task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  //   Create Li elemets

  const li = document.createElement("li");
  // add class
  li.className = "collection-item";
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  //   create new link element

  const link = document.createElement("a");
  // add class
  link.className = "delete-item secondary-content";
  //   add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //   append the link to li
  li.appendChild(link);

  // append li to ul
  taskList.appendChild(li);

  //   clear input
  taskInput.value = "";
  e.preventDefault();
}
