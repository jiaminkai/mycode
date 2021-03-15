import { request } from "./requert";
export function GetParmas(id,value){
    console.log(id,value )
    return request({
        url:`categories/${id}/attributes`,
        params:{sel:value}
    })
}
export function GetCary(){

    return request({
        method:'get',
        url:"categories",

    })
}
export function AddParmas(id,value,name,vals){
    console.log(id,value,name,vals)
    return request({
        method:'post',
        url:`categories/${id}/attributes`,
        data:{
            'attr_sel':value,
            'attr_name':name,
            'attr_vals':vals
        }
    })
}
export function AddParmasitem(id,value,name,attrId,vals){
    console.log(id,value,name,attrId,vals)
    return request({
        method:'put',
        url:`categories/${id}/attributes/${attrId}`,
        data:{
            'attr_sel':value,
            'attr_name':name,
            'attr_vals':vals
        }
    })
}
export function DelParmasitem(id,value,name,attrId,vals){
    console.log(id,value,name,attrId,vals)
    return request({
        method:'delete',
        url:`categories/${id}/attributes/${attrId}`,
        data:{
            'attr_sel':value,
            'attr_name':name,
            'attr_vals':vals
        }
    })
}
export function EditParmas(id,value,name,attrId){
    console.log(id,value,name,attrId)
    return request({
        method:'put',
        url:`categories/${id}/attributes/${attrId}`,
        data:{
            'attr_sel':value,
            'attr_name':name,
        }
    })
}
export function DelParmas(id,attrId,name){
    console.log(id,attrId )
    return request({
        method:'delete',
        url:`categories/${id}/attributes/${attrId}`,
        params:{
           'attr_vals':name
        }
    })
}
export function GetGood(pagesize,pagenum){
    return request({
        method:'get',
        url:'goods',
        params:{
            pagesize,
            pagenum

        }
    })
}
export function GetCatelist(params){
    return request({
        method:'get',
        url:'categories',
        params
    })
}

