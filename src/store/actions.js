// import ajax from "@/assets/js/ajax";
import { ActionContext } from 'vuex';
import axios from "axios";
import { Loading } from 'element-ui';
import { Notification } from 'element-ui';
// const baseURL = process.env.BASE_URL;

axios.create({
    // baseURL: `${baseURL}api`,
    timeout: 60000
})
// http请求拦截器

var loadingInstance

axios.interceptors.request.use(config => {
    loadingInstance = Loading.service({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    });
    return config
}, error => {
    loadingInstance.close()
    return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {// 响应成功关闭loading
    loadingInstance.close()
    return data
}, error => {
    loadingInstance.close()
    return Promise.reject(error)
})






export default {
  'GET_HOME_SEVE':( commit, state ) => {
    return axios.get('/home/sevenDate');
  },
  'GET_HOME_INDATE':({ commit, state }) => {
    return axios.get('/home/inDate');
  }
}