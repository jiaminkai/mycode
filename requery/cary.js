import {request} from '../requery/requert';

export function GetCary(){
    return request({
        method:'get',
        url:"categories",

    })
}
export function PostGoods(data){
    return request({
        method:'post',
        url:"goods",
        data
    })
}

export function GetRoles(){
    return request({
        method:'get',
        url:"roles",

    })
}
export function AddRolsUser(roleName,roleDesc){
    return request({
        method:'post',
        url:"roles",
        data:{
            roleName,
            roleDesc
        }
    })
}
export function AddRols(id,rids){
    return request({
        method:'post',
        url:`roles/${id}/rights`,
        data:{
            rids
        }
    })
}
export function EditRols(id,roleName,roleDesc){
    return request({
        method:'put',
        url:`roles/${id}`,
        data:{
            roleName,
            roleDesc
        }
    })
}
export function DelRols(id){
    return request({
        method:'delete',
        url:`roles/${id}`,
    })
}
export function GetLife(){
    return request({
        method:'get',
        url:'rights/tree',
    })
}