const form = document.getElementById("form");
form.addEventListener("submit", addTodo);

function addTodo(e) {
  const todos = [];
  const input = document.getElementById("text").value;
  todos.push(input);

  e.preventDefault();
  let content = "";
  for (let i = 0; i < todos.length; i++) {
    content += "<li>" + todos[i] + "<li>";
  }
  document.getElementById("list").innerHTML += content;
}
