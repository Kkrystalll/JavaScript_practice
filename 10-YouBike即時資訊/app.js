const API =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

const input = document.querySelector("#searchKeyword")
const button = document.querySelector(".btn.btn-success.fs-3")
const ul = document.querySelector(".siteList.list-group")

async function getplace(keyword) {
  const rawdata = await fetch(API)
  const ubikedata = await rawdata.json()
  // console.log(keyword)
  const roadubike = ubikedata.filter((data) => data["ar"].includes(keyword))
  roadubike.forEach((place) => {
    const station = place.sna.slice(11)
    const bike = place.sbi
    const road = place.ar
    // console.log(station)
    const list = document.createElement("li")
    list.classList.add("list-group-item", "fs-5")
    ul.appendChild(list)
    list.textContent = `${station} (${bike})`
    const br = document.createElement("br")
    list.appendChild(br)

    const small = document.createElement("small")
    list.appendChild(small)
    small.textContent = road

    const icon = document.createElement("i")
    icon.className = "fas fa-bicycle"
    // list.appendChild(icon)
    list.insertAdjacentElement("afterbegin", icon)
    // console.log(getplace())
  })
}

button.addEventListener("click", (e) => {
  e.preventDefault()
  let keyword = input.value

  getplace(keyword)

  input.value = ""
  input.focus()
  ul.textContent = ""
})

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    getplace()
  }
})
