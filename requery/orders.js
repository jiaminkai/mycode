import { request } from "./requert";

export function GetOrder(data){
    return request({
        method:'get',
        url:'orders',
        params:data
    })
}
export function PutOrder(id,data){
    return request({
        method:'put',
        url:`orders/${id}`,
        params:data
    })
}
export function GetWuLiu(){
    return require({
        method:'get',
        url:'kuaidi/1106975712662'

    })
}