import axios from 'axios';
export function request(config){
    const inster =axios.create({
        baseURL:'http://119.23.53.78:8888/api/private/v1/',
        timeout:5000
    })
    inster.interceptors.request.use(config=>{
        config.headers.Authorization= sessionStorage.getItem('token');
        return config   
    },err=>{
        console.log("error", err)
    })
    inster.interceptors.response.use(config=>{
        return config
    },err=>{
        console.log("err",err )
    })
   return inster(config)
}

export function Mone(url){
   return request({
       url
   })
}