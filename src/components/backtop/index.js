import './backtop.css'
import 'icons/iconfont.css'

function showBacktop(scrollContainerId, backtopContainerId, keyPoint = 500) {
  const $eventEl = document.getElementById(scrollContainerId)
  const $backtop = document.getElementById(backtopContainerId)
  //当$eventEl滚动超过500，移除“hidden”类，显示“$backtop”
  $eventEl.addEventListener("scroll", () => {
    if ($eventEl.scrollTop >= keyPoint) {
      $backtop.classList.remove("hidden")
    }else {
      $backtop.classList.add("hidden")
    }
  })

}


export default showBacktop;