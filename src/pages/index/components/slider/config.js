// Swiper配置
export default{
  loop: true, // 循环模式选项
  
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },
  
  // 如果需要前进后退按钮
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  
  // 如果需要滚动条
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
}

export const SWIPER_CONTAINER = '.swiper-container'

// slider图片接口
export const SLIDER_URL = 'https://www.imooc.com/api/mall-wepApp/index/slider'