import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// vuescroll
import vuescroll from 'vuescroll/dist/vuescroll-native'
Vue.use(vuescroll)

// tiny-cookie
import * as Cookies from 'tiny-cookie';
window.Cookies = Cookies;

// axios
import * as axios from './utils/axios'
Vue.prototype.$get = axios.get
Vue.prototype.$post = axios.post
Vue.prototype.$put = axios.put
Vue.prototype.$delete = axios.axiosDelete

// 引入Url配置
import URL from './utils/urlConfig'
Vue.prototype.$Url = URL

// 引入Bus总线
import Bus from './utils/Bus'
Vue.prototype.$Bus = Bus

// 引入iconfont
import '@/assets/font/iconfont.css'



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
