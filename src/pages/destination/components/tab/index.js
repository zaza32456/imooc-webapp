import './tab.css'

// // 原代码，监听事件写在内部
// const selectTab = () => {
//   let indexNum 
//   const $tabList = document.getElementById("tab-list")
//   // 将DOM类数组转化为数组
//   let tabList = Array.from(document.getElementsByClassName("tab-item"))

//   // 父元素代理，监听点击事件
//   $tabList.addEventListener("click",() => {
//     const $selectedEl = event.target

//     // NOTE：DOM的类数组没有forEach方法,直接遍历会报错
//     tabList.forEach(tabItem => {
//       tabItem.classList.remove("tab-item-active")
//     });
//     $selectedEl.classList.add("tab-item-active")

//     indexNum = $selectedEl.dataset.id

//     },false)

//     return indexNum

// }

// export default selectTab


// tab切换
const selectTab = ($item) => {


  // 将DOM类数组转化为数组
  let items = Array.from(document.getElementsByClassName("tab-item"))
  // 取消所有item的选择效果
  items.forEach(item => {
    item.classList.remove("tab-item-active")
  });

  // 为被点击item加上css选择效果
  $item.classList.add("tab-item-active")

  // 返回被选中item的id值
  let indexNum //可以去掉吗
  indexNum = $item.dataset.id
  return indexNum

}

export default selectTab