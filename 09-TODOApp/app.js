const task = document.querySelector("#taskInput")
const btn = document.querySelector("#addBtn")
const todolist = document.querySelector(".todo-list")

btn.addEventListener("click", function (addlist) {
  const list = task.value
  const todoitem = document.createElement("li")
  todoitem.classList.add("todo-item")
  todolist.insertAdjacentElement("afterbegin", todoitem) //span+button //在ul內層的上方
  const item = document.createElement("span")
  item.classList.add("item")
  item.textContent = list
  todoitem.appendChild(item) //追加小孩
  const closebtn = document.createElement("button")
  closebtn.classList.add("closeBtn")
  todoitem.appendChild(closebtn)
  closebtn.textContent = "X"
  const closebutton = document.querySelector(".closeBtn")
  closebutton.addEventListener("click", function (closelist) {
    const todoitems = document.querySelector(".todo-item")
    const deletebtn = closebutton.parentElement
    deletebtn.remove(closelist)
  })
})
