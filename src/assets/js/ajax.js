import axios from 'axios';
import { Loading } from 'element-ui';
import { Notification } from 'element-ui';




axios.defaults.timeout =  5000
axios.defaults.baseURL = '';

const ajax=function(obj){
	let loadingInstance = Loading.service({
        lock: true,
        text: obj.loading || 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    });
    axios({
        method: obj.mode,
        url: obj.url,
        data:obj.data,
        headers:{
          // 'Authorization': localStorage.getItem('YBDL_token'),
          'Content-Type': 'application/json'
        }
    })
    .then(response => {
        loadingInstance.close()
          obj.success(response)
    })
    .catch(error => {
       loadingInstance.close();
       Notification({
            title: '警告',
            message: error.data.msg,
            type: 'warning'
          })
    })
}



export default ajax;