// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方
const height = document.querySelector("#bodyHeight")
const weight = document.querySelector("#bodyWeight")
const button = document.querySelector("button")
const result = document.querySelector("#resultText")

button.addEventListener("click", function (bmihw) {
  const heightM = height.value / 100
  const bmi = weight.value / (heightM * heightM)
  const answer = bmi.toFixed(2)
  result.textContent = answer
})
