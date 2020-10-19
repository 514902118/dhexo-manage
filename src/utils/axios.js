import axios from 'axios';
import * as Cookies from 'tiny-cookie'
import { Message } from 'element-ui';
import { Loading } from 'element-ui';
import base64 from './base64'
import router from '../router/index'

let loading='' //定义loading变量
function startLoading() { //使用Element loading-start 方法
  loading = Loading.service({
    lock: false,
    text: '加载中，请稍后...',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.3)',
  });
}
function endLoading() { //使用Element loading-close 方法
  loading.close()
}

axios.defaults.timeout = 200000;
//http request 拦截器
axios.interceptors.request.use(
  config => {
    //
    let token = Cookies.get("token")
    if(token != null){
      config.headers['token'] = token
    }
    // country国别接口里的headers添加公司名称和ip，这里不能传中文，所以传的是base64
    if(config.url.indexOf('pack/index')>-1&&(config.params&&config.params.dataType === 'patentScore')){
      config.headers['companyName'] = base64.encode(config.params.companyName)
      config.headers['ip'] = window.returnCitySN.cip
    }
    config.headers['Content-Type'] = 'application/json'
    startLoading()
    // if(config.params&&config.params.dataType&&config.params.dataType.indexOf('patentCount')>-1 ||
    //   config.url.indexOf('companytrade/patent/list')>-1 || // 技术分析，表格查询
    //   config.url.indexOf('ipcGroup')>-1 || // 技术对比，专利量查询
    //   config.url.indexOf('company/invoke?1')>-1 || // 搜索列表
    //   config.url.indexOf('pack/check?1')>-1 || // 搜索列表进入公司详情页
    //   (config.data&&config.data.sf&&config.data.sl&&config.data.spn&&config.data.sx) // 获取pdfString
    //   ){
    //   startLoading()
    // }
    return config;
  },
  error => {
    if(loading&&loading!==''){
      endLoading()
    }
    return new Promise(() => {})
    // return Promise.reject(error);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  response => {
    let data = response.data
    if (loading&&loading !== '') {
      endLoading()
    }
    if (data&&data.status === 401) { // token失效,过期
      Cookies.remove('token')
      router.push({
        name: 'login'
      })
      
      return new Promise(() => {
        
      })
    } else if (data.status === 40307) { // token即将失效
      Cookies.set('token', data.data.token)
      //重新请求
      return axios(response.config)
    } else if (data.status === 40305) {
      Message({
        type: 'error',
        showClose: true,
        dangerouslyUseHTMLString: true,
        duration: 2000,
        message: `<p style="line-height:20px;">试用账号无法查看，请联系管理员开通正式账号，联系方式 010-53223695<br>
          <a href='#/search/white'>点击此处返回试用公司列表</a></p>`
      })
      return response
    }
    
    return response
  },
  error => {
    endLoading()
    if (axios.isCancel(error)) {
    // 为了终结promise链 就是实际请求 不会走到.catch(rej=>{});这样就不会触发错误提示之类了。
      return new Promise(() => {});
    }else{
      return Promise.reject(error)
    }
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url,params={},config = {}, cancel){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params,
      cancelToken: cancel
    }, config)
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {}, config = {}){
  return new Promise((resolve,reject) => {
    axios.post(url, data, config)
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
* 封装put方法
* @param url
* @param data
* @returns {Promise}
*/

export function put(url,data={}){
 return new Promise((resolve,reject) => {
   axios.put(url,data)
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
 })
}

 /**
 * 封装delete方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function axiosDelete(url,params={}){
  return new Promise((resolve,reject) => {
    axios.delete(url,{
      params:params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}
