import axios from 'axios'
// https://api.weixin.qq.com/sns/jscode2session
export function getStorageOpenid(){
    const openId=localStorage.setItem('openId',JSON.stringify('oQmbb4sNZdxaUQZ0sfYgvtOP2S7c'))
    const getId =JSON.parse(localStorage.getItem('openId')||'[]')
    return getId;
}
export function get(url,paras){
    return new Promise((resolve,reject)=>{
        axios.get('api'+url,{
            params:paras
        }).then((res)=>{
            resolve(res.data)
        }).catch((err)=>{
            reject(err.data)
        })
    })
}
export function post(url,data){
    return axios.post(url,data)
}