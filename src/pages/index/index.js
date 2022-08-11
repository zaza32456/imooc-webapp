// 引入样式(按层级拆分)
import 'styles/reset.css';
import 'styles/base.css';
import 'styles/layout.css';
import './index.css';

// // 组件
import './components/header'
import './components/slider'
import './components/nav'
import './components/product'
import '../../components/tabbar'
import './components/backtop'

// 标签栏高亮
document.getElementById("tabbar-1").classList.add("tabbar-item-active")