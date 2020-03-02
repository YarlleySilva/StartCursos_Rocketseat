listElement = document.querySelector("#app ul");
inputElement = document.querySelector("#app input");
btnElement = document.querySelector("#app button");

//Transforma o JSON em um Array novamente
//Se o localStorage tiver vazio é definido um valor default = [];
var todos = JSON.parse(localStorage.getItem("lista_todo")) || [];

renderTodos();

function renderTodos() {
  listElement.innerHTML = "";

  for (todo of todos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    var pos = todos.indexOf(todo);
    linkElement.setAttribute("onclick", "deletarTodo(" + pos + ")");

    var linkText = document.createTextNode("Excluir");

    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}


function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  salvarToStorage();
}

btnElement.onclick = addTodo;

function deletarTodo(pos) {
  //Verifica a posição index (pos) e remove a quantidade
  //de elementos daquela posicão (1);
  todos.splice(pos, 1);
  renderTodos();
  salvarToStorage();
}

function salvarToStorage() {
  //localStorage guarda apenas String simples
  //setItem ("nome qualquer", variavel)
  //JSON.stringify = Transforma a lista "todos" em uma String JSON.
  localStorage.setItem("lista_todo", JSON.stringify(todos));
}