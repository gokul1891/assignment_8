// Get elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const deleteTaskBtn = document.getElementById("deleteTaskBtn");
const taskList = document.getElementById("taskList");

// Add Task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";

  // Task text span
  const span = document.createElement("span");
  span.textContent = taskText;
  span.classList.add("task-text");

 
  // Buttons container
  const btnGroup = document.createElement("div");

  // Edit Button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "btn btn-sm btn-warning me-2";
  editBtn.addEventListener("click", () => {
    const newTask = prompt("Edit your task:", span.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      span.textContent = newTask.trim();
    }
  });

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "btn btn-sm btn-danger";
  deleteBtn.addEventListener("click", () => {
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    if(confirmDelete){
    
    li.remove();
    }
  });

  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnGroup);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
});

// Delete All Tasks
deleteTaskBtn.addEventListener("click", () => {
  taskList.innerHTML = "";
});
