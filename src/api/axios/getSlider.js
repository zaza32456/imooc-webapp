const getSlider = () => {
  let sliders = []
  let htmlText =""

  function getSlider() {
    axios.get('https://www.imooc.com/api/mall-wepApp/index/slider')
      .then(res => {
        sliders = res.data.data
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

        console.log("htmlText=",htmlText)

        document.getElementById("sliders").innerHTML = htmlText
      })
  }

  getSlider()

}

export default getSlider;


