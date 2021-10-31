class TodoList {
  constructor(todoListElement, emptyMessageElement, summaryElement) {
    this.todoListElement = todoListElement;
    this.emptyMessageElement = emptyMessageElement;
    this.summaryElement = summaryElement;
    this.todos = this.getTodosFromStorage();
    this.hideCompleted = false;
    this.searchText = "";
  }

  get filteredTodos() {
    return this.todos.filter((todo) => {
      const hideCompletedMatch = !this.hideCompleted || !todo.completed;
      const searchTextMatch = todo.text
        .toLowerCase()
        .includes(this.searchText.toLowerCase());
      return searchTextMatch && hideCompletedMatch;
    });
  }

  getTodosFromStorage() {
    const todosJSON = localStorage.getItem("todos");

    try {
      return todosJSON ? JSON.parse(todosJSON) : [];
    } catch (e) {
      return [];
    }
  }

  createTodo(text) {
    this.todos.push({ id: uuidv4(), text: text, completed: false });
    this.saveTodos();
  }

  saveTodos() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.saveTodos();
  }

  toggleTodo(id) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo == null) return;
    todo.completed = !todo.completed;
    this.saveTodos();
  }

  renderTodos() {
    this.todoListElement.innerHTML = "";
    const incompleteTodos = this.filteredTodos.filter((todo) => !todo.complete);
    this.summaryElement.innerText = this.getSummaryText(incompleteTodos);
    this.todoListElement.appendChild(this.summaryElement);
    this.filteredTodos.forEach((todo) => {
      this.todoListElement.appendChild(this.generateTodoDOM(todo));
    });

    if (this.filteredTodos.length <= 0) {
      this.todoListElement.appendChild(this.emptyMessageElement);
    }
  }

  generateTodoDOM(todo) {
    const todoEl = document.createElement("label");
    const containerEl = document.createElement("div");
    const checkbox = document.createElement("input");
    const todoText = document.createElement("p");
    const removeButton = document.createElement("button");

    // Setup todo checkbox
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = todo.completed;
    containerEl.appendChild(checkbox);
    checkbox.classList.add("checkbox--inner");
    checkbox.addEventListener("change", () => {
      this.toggleTodo(todo.id);
      this.renderTodos();
    });

    // Setup the todo text
    todoText.textContent = todo.text;
    containerEl.appendChild(todoText);

    // Setup container
    todoEl.classList.add("list-item");
    containerEl.classList.add("list-item__container");
    todoEl.appendChild(containerEl);

    // Setup the remove button
    removeButton.textContent = "remove";
    removeButton.classList.add("button", "button--danger");
    todoEl.appendChild(removeButton);
    removeButton.addEventListener("click", () => {
      this.removeTodo(todo.id);
      this.renderTodos();
    });

    return todoEl;
  }

  getSummaryText(incompleteTodos) {
    const plural = incompleteTodos.length === 1 ? "" : "s";
    return `You have ${incompleteTodos.length} todo${plural} left`;
  }
}

const todoListElement = document.getElementById("todos");
const emptyMessageElement = document.createElement("p");
emptyMessageElement.classList.add("empty-message");
emptyMessageElement.textContent = "No to-dos to show";
const summaryElement = document.createElement("h2");
summaryElement.classList.add("list-title");
const todoList = new TodoList(
  todoListElement,
  emptyMessageElement,
  summaryElement
);
todoList.renderTodos();

// Set up search text handler
document.getElementById("search-text").addEventListener("input", (e) => {
  todoList.searchText = e.target.value;
  todoList.renderTodos();
});

// Set up checkbox handler
document.getElementById("hide-completed").addEventListener("change", (e) => {
  todoList.hideCompleted = e.target.checked;
  todoList.renderTodos();
});

// Set up form submission handler
document.getElementById("new-todo").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = e.target.elements.text.value.trim();
  if (text.length <= 0) return;
  todoList.createTodo(text);
  todoList.renderTodos();
  e.target.elements.text.value = "";
});

// Bonus: Add a watcher for local storage
window.addEventListener("storage", (e) => {
  if (e.key === todos) {
    todoList.getTodosFromStorage();
    todoList.renderTodos();
  }
});
