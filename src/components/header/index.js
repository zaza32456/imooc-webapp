import './header.css';


// // 头部背景变化效果
// // 将需要监听/变更的元素存为dom变量方便后续操作
// const scrollContainer = document.getElementById('index-page')
// const headerEl = scrollContainer.querySelector('.header')

// const changedClass = 'header-transition'

// // 设置布尔开关，减少dom变化
// let initColor = true

// scrollContainer.addEventListener('scroll', () => {
//   if(initColor && scrollContainer.scrollTop > 0) {
//     headerEl.classList.add(changedClass)
//     initColor = !initColor
//   }else if (!initColor && scrollContainer.scrollTop <= 0) {
//     headerEl.classList.remove(changedClass)
//     initColor = !initColor
//   }
// },false)


// 提取函数中的可变参数，作为组件的形参,以达到复用目的
const HeaderBGColor = (containerId, elementClass, keyPoint = 0, HtmlOrBody ='') => {
  const scrollContainer = document.getElementById(containerId)
  console.log(containerId)
  const headerEl = scrollContainer.querySelector(`.${elementClass}`)
  console.log(`.${elementClass}`)

  const changedClass = 'header-transition'
  
  let initColor = true

  let eventEl = scrollContainer

  if (HtmlOrBody === 'html') {
    eventEl = document.documentElement 
  }else if(HtmlOrBody === 'body'){
    eventEl = document.body 
  }
  
  scrollContainer.addEventListener('scroll', () => {
    if(initColor && eventEl.scrollTop > keyPoint) {
      headerEl.classList.add(changedClass)
      initColor = !initColor
    }else if (!initColor && eventEl.scrollTop <= keyPoint) {
      headerEl.classList.remove(changedClass)
      initColor = !initColor
    }
  },false)
    
}

export default HeaderBGColor;