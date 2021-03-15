import {request} from './requert';
// import axios from 'axios';
export function GetUser(info){
    console.log("aa",info)
    return request({
        method:'get',
        url:"users",
        params:info
    })
}
export function SechUser(id){
    return request({
        method:'get',
        url:'users/'+id+''
    })
}
export function AddUser(user){
    return request({
        method:'post',
        url:"users",
        data:user
    })
}
export function UpUser(url,params){
    console.log(url, params)
    return request({
        method:'put',
        url,
        data:params
    })
}
export function DelUser(url,params){
    console.log(url, params)
    return request({
        method:'delete',
        url,
        params
    })
}
