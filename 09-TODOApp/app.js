const taskinput = document.querySelector("#taskInput")
const addbtn = document.querySelector("#addBtn")
const todolist = document.querySelector(".todo-list")

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

taskinput.addEventListener("keyup", function (enter) {
  if (enter.keyCode === 13) {
    todo(todo)
  }
})

addbtn.addEventListener("click", function (addlist) {
  todo(todo)
})
