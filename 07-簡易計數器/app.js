// document.addEventListener("DOMContentLoaded", function () {
//   const minusbutton = document.querySelector("#minus")
//   const plusbutton = document.querySelector("#plus")
//   const center = document.querySelector("#counter")
//   minusbutton.addEventListener("click", function (minus) {
//     if (center.value >= 1) {
//       center.value = Number(center.value) - 1
//     }
//   })
//   plusbutton.addEventListener("click", function (plus) {
//     center.value = Number(center.value) + 1
//   })
// })

document.addEventListener("DOMContentLoaded", function () {
  const minusbutton = document.querySelector("#minus")
  const plusbutton = document.querySelector("#plus")
  const number = document.querySelector("#counter")
  minusbutton.addEventListener("click", function (minus) {
    if (number.value >= 1) {
      number.value = Number(number.value) - 1
    }
  })
  plusbutton.addEventListener("click", function (plus) {
    number.value = Number(number.value) + 1
  })
})
