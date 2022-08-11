import 'swiper/swiper-bundle.min.css';
import './slider.css';
import Swiper from 'swiper/swiper-bundle.min';
import config, {SWIPER_CONTAINER, SLIDER_URL} from './config'
import 'components/loading'

// axios获取幻灯片
const axios =require("axios")

function getSlider(URL) {
  axios.get(URL)
    .then(res => {
      let htmlText =""
      let sliders = res.data.data

      console.log("sliders = ",sliders)
      
      sliders.forEach(data => {
        htmlText += 
        `
        <div class="swiper-slide">
          <a href="#">
            <img src="${data.url}" alt="" class="swiper-image">
          </a>
        </div>
        `
      })

      // console.log("htmlText=",htmlText)

      document.getElementById("sliders").innerHTML = htmlText

      new Swiper (SWIPER_CONTAINER, config) 
    })
}

getSlider(SLIDER_URL)


       