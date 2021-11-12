const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let todos = [];

const TODOS_KEY = "todos";

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
}

function handleCheckbox(event) {
  const li = event.target.parentElement;
  const span = li.querySelector("span");
  span.classList.toggle("linetext");
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = newTodo.text;
  const button = document.createElement("button");

  button.innerText = "삭제";
  button.addEventListener("click", deleteTodo);
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;

  checkbox.addEventListener("change", handleCheckbox);

  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parseTodo = JSON.parse(savedTodos);
  todos = parseTodo;
  parseTodo.forEach(paintTodo);
}
