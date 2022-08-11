import './main.css'

// 引入组件
import '../tab'
import '../content'


import selectTab from '../tab/index'
import getContent from '../content/index'
import {CONTENT_URL} from './config'

const axios = require('axios')

async function getMain(clickedEl) {
  let tabId = await selectTab(clickedEl)
  getContent(CONTENT_URL, tabId)
} 

// 首次刷新显示
getContent(CONTENT_URL, 1)

// 监听点击事件
const $tabList = document.getElementById("tab-list")

$tabList.addEventListener("click",() => {
  console.log(event.target)
  getMain(event.target) 
  },false)

