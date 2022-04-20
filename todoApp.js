//CONSTS
const form = document.getElementById("form");
const all = document.querySelector(".all");
const filter = document.querySelector("#filter");
const firstTodo = document.querySelector("#to");

//ADDEVENLISTENERS
all.addEventListener("click", deleteTodo);
filter.addEventListener("click", filterTodo);
form.addEventListener("submit", addTodo);


//FUCNTIONS
function addTodo(e) {
  all.innerHTML += `
<div class="todo-div">
<input type="text" id="todo" class="todo filterTodos"  />
<div class="delete">
  <span class="x">&times</span>
</div>
</div>
`;
  let inputs = document.querySelectorAll("#todo");
  inputs.forEach((todo) => {
    todo.addEventListener("blur", (_) => {
      todo.setAttribute("value", todo.value);
    });
  });
  e.preventDefault();
}

firstTodo.addEventListener("blur", (_) => {
  firstTodo.setAttribute("value", firstTodo.value);
});


function deleteTodo(e) {
  if (e.target.className == "delete") {
    e.target.parentElement.remove();
  } else if (e.target.className == "x") {
    e.target.parentElement.parentElement.remove();
  }
}

let index = 0;
function filterTodo(e) {
  let input = document.querySelectorAll(".filterTodos");
  let arr = [];
  input.forEach((item) => {
    arr.push(item.value);
  });
  if (index == 0) {
    filter.src = "images/a-z.svg";
    arr.sort((a, b) => {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    });
    index++;
  } else {
    filter.src = "images/z-a.svg";
    arr.sort((a, b) => {
      if (a > b) {
        return -1;
      } else if (a < b) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  all.innerHTML = "";
  arr.forEach((item) => {
    all.innerHTML += `
<div class="todo-div">
<input type="text" id="todo" class="todo filterTodos local" value="${item}"  />
<div class="delete">
  <span class="x">&times</span>
</div>
</div>
`;
  });
}