import './product.css'
import 'components/loading'
import {PRODUCT_URL} from './config'

// axios获取nav数据
const axios =require('axios')

function getProduct(URL) {
  axios.get(URL)
      .then(res => {
        let htmlText =""
        let productList = res.data.data
        
        // console.log("productList = ",productList)

        productList.forEach(data => {
          htmlText += `
            <li class="product-item">
              <a href="./details.html?id=${data.id}" class="product-link">
                <p class="product-img" >
                  <img src=${data.url} alt="">
                </p>
                <p class="product-name">
                  ${data.title}
                </p>
                <p class="product-price">
                  ¥${data.price}起
                </p>
              </a>
            </li>
        `
        // console.log(htmlText)
        });

        document.getElementById('product').innerHTML = htmlText
      })
}

getProduct(PRODUCT_URL)