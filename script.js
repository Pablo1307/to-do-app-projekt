let tasks = [];

document.getElementById("taskForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;
  addTask(title, category);
});

function addTask(title, category) {
  const task = {
    id: Date.now(),
    title,
    category,
    isCompleted: false,
  };
  tasks.push(task);
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map((t) => t.id === id ? { ...t, isCompleted: !t.isCompleted } : t);
  renderTasks();
}

function filterTasks(filter) {
  renderTasks(filter);
}

function renderTasks(filter = 'all') {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  let filtered = tasks;
  if (filter === "completed") filtered = tasks.filter(t => t.isCompleted);
  else if (filter === "pending") filtered = tasks.filter(t => !t.isCompleted);

  for (let task of filtered) {
    const li = document.createElement("li");
    li.className = task.isCompleted ? "completed" : "";
    li.innerHTML = `
      ${task.title} [${task.category}]
      <span>
        <button onclick="toggleTask(${task.id})">✔</button>
        <button onclick="deleteTask(${task.id})">🗑</button>
      </span>
    `;
    list.appendChild(li);
  }
}
