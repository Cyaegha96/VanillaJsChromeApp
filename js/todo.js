const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

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
  paintTodo(newTodo);
  todoInput.value = "";
}

todoForm.addEventListener("submit", handleTodoSubmit);
