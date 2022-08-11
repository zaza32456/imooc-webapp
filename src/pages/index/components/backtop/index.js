import showBacktop from 'components/backtop'

showBacktop("index-page", "backtop")


// 点击backtop回到顶部
const $backtop = document.getElementById("backtop")
const $scrollContainer = document.getElementById("index-page")

$backtop.addEventListener("click", () => {
  $scrollContainer.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})