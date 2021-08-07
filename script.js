var todoInput = document.querySelector("#todo-text")
var todoForm = document.querySelector("#todo-form")
var todoList = document.querySelector("#todo-list")
var todoCount = document.querySelector("#todo-count")
// MY LIST OF VAR 
//todo-text
// todo-form
// todo-list
// todo-count
var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
renderTodos()
function renderTodos() {
      // Clear todoList element and update todoCountSpan
    todoList.innerHTML =  "";
    todoCount.textContent = todos.length;

      // Render a new li for each todo
    for (var i = 0; i < todos.length; i++) {
       var todo = todos[i];

       // create a new todo everytime our users press enter.
       var li = document.createElement("li");
       li.textContent = todo;
       li.setAttribute("data-index", i);

       var button = document.createElement("button");
       button.textContent = "Complete";

       li.appendChild(button);
       todoList.appendChild(li);
    }
}

// when i press Enter this should happen: 

todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
    var todoText = todoInput.value.trim();
  
    // Return from function early if submitted todoText is blank
    if (todoText === "") {
      return;
    }
  
    // Add new todoText to todos array, clear the input
    todos.push(todoText);
    todoInput.value = "";
  
    // Re-render the list
    renderTodos();
  });


// When a element inside of the todoList is clicked...
todoList.addEventListener("click", function(event) {
    var element = event.target;
  
    // If that element is a button...
    if (element.matches("button") === true) {
      // Get its data-index value and remove the todo element from the list
      var index = element.parentElement.getAttribute("data-index");
      todos.splice(index, 1);
  
      // Re-render the list
      renderTodos();
    }
  });
  

