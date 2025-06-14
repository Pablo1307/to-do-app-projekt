function testAddTask() {
  tasks = [];
  addTask("Testowe zadanie", "Dom");
  console.assert(tasks.length === 1, "Test dodawania nie przeszedł");
}

function testDeleteTask() {
  tasks = [];
  addTask("A", "X");
  const id = tasks[0].id;
  deleteTask(id);
  console.assert(tasks.length === 0, "Test usuwania nie przeszedł");
}

function testToggleTask() {
  tasks = [];
  addTask("A", "X");
  const id = tasks[0].id;
  toggleTask(id);
  console.assert(
    tasks[0].isCompleted === true,
    "Test przełączania statusu nie przeszedł"
  );
}

function testFilterCompleted() {
  tasks = [];
  addTask("A", "X");
  addTask("B", "Y");
  toggleTask(tasks[1].id); // tylko B ukończone
  const completed = tasks.filter((t) => t.isCompleted);
  console.assert(
    completed.length === 1 && completed[0].title === "B",
    "Test filtrowania ukończonych nie przeszedł"
  );
}

testAddTask();
testDeleteTask();
testToggleTask();
testFilterCompleted();
