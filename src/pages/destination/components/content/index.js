import './content.css'

// 导入组件
import 'components/loading'

// 获取content数据
const axios = require('axios')

const getContent = (URL,tabId) => {
  const $content = document.getElementById('content-list')
  const $loading = document.getElementById('loading-container')
  $content.innerHTML = ''
  $loading.classList.remove("hidden")

  axios.get(`${URL}/${tabId}`)
    .then(res => {
      let htmlText =''
      let contentList = res.data.data
      console.log(res.data.data)
      contentList.forEach(content => {
        htmlText += `
        <li class="content-item">
          <a href="#" class="content-link">
            <img src="${content.url}" alt="">
            <span class="content-text">${content.text}</span>
          </a>
        </li>
      `
      $loading.classList.add("hidden")
      $content.innerHTML = htmlText
      });
    })

}

export default getContent