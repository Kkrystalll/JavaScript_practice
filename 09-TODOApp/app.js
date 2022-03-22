// const taskinput = document.querySelector("#taskInput")
// const addbtn = document.querySelector("#addBtn")
// const todolist = document.querySelector(".todo-list")

function todo(todo) {
  const todoitem = document.createElement("li")
  todoitem.classList.add("todo-item")
  todolist.insertAdjacentElement("afterbegin", todoitem)
  const item = document.createElement("span")
  item.classList.add("item")
  const closebtn = document.createElement("button")
  closebtn.classList.add("closeBtn")
  todoitem.appendChild(item)
  todoitem.appendChild(closebtn)
  item.textContent = taskinput.value
  closebtn.textContent = "X"
  const closebutton = document.querySelector(".closeBtn")
  closebutton.addEventListener("click", function (deletelist) {
    deletelist.target.parentElement.remove(deletelist)
  })
  taskinput.value = " "
}

// taskinput.addEventListener("keyup", function (enter) {
//   // if (enter.key === "Enter")
//   if (enter.keyCode === 13) {
//     todo(todo)
//   }
// })

// addbtn.addEventListener("click", function (addlist) {
//   todo(todo)
// })

function createTodoItem(text) {
  const todo = document.createElement("li")
  todo.className = "todo-item"

  const span = document.createElement("span")
  span.className = "item"
  span.textContent = text

  const btn = document.createElement("button")
  btn.className = "closeBtn"
  btn.textContent = "X"

  todo.appendChild(span)
  todo.appendChild(btn)

  return todo
}

function addItemInContainer(container, input) {
  if (input.value.trim() !== "") {
    const todo = createTodoItem(input.value)
    container.insertAdjacentElement("afterbegin", todo)
  }

  input.value = ""
  input.focus()
}

function addTodo() {
  const container = document.querySelector(".todo-list")
  const input = document.querySelector("#taskInput")
  addItemInContainer(container, input)
}

// document.querySelector("#addBtn").addEventListener("click", addTodo)
$("#addBtn").click(addTodo) //jQuery

// document.querySelector("#taskInput").addEventListener("keyup", (e) => {
//   if (e.key === "Enter") {
//     addTodo()
//   }
// })
$("#taskInput").keyup((e) => {
  if (e.key === "Enter") {
    addTodo()
  }
}) //jQuery寫法

// 事件委任 event delegation
document.querySelector(".todo-list").addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    e.target.parentElement.remove()
  }
})
