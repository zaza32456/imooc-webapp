import './nav.css'
import { NAV_URL } from './config'

// axios获取nav数据
const axios =require('axios')

function getNav(URL) {
  axios.get(URL)
      .then(res => {
        let htmlText =""
        let navList = res.data.data
        
        // console.log("navList = ",navList)

        navList.forEach(data => {
          htmlText += `
          <li class="nav-item">
            <a href="" class="nav-link">
              <img src=${data.url} alt="" class="nav-img">
              <span>${data.text}</span>
            </a>  
          </li>
        `
        // console.log(htmlText)
        });

        document.getElementById('nav').innerHTML = htmlText
      })
}

getNav(NAV_URL)