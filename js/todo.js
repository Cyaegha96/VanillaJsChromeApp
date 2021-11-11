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
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  button.innerText = "삭제";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);

  span.innerText = newTodo;
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  todos.push(newTodo);
  paintTodo(newTodo);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
console.log(savedTodos);
if (savedTodos !== null) {
  const parseTodo = JSON.parse(savedTodos);
  todos = parseTodo;
  parseTodo.forEach(paintTodo);
}
