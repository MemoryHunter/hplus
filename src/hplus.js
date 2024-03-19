import datatype from "./datatype";
import {fnStatus,httpMethod} from "./constant";
import render from "./render";
import request from "./request";


let datas = [];
let requests = [];

function getDatasShared() {  
    return datas;  
}  

function setDatasShared(d) {  
    datas.push(d);  
}  

function getRequestsShared() {  
    return requests;  
}  

let createRequest = function(requestObj) {  
    if (datatype(requestObj) === 'Object') {  
        initRequest(requestObj);  
    }  
    if (datatype(requestObj) === 'Array') {  
       requestObj.forEach(initRequest);  
    }  
};


function initRequest(requestObj) {  
    const { key, url, method = 'GET', params = {} } = requestObj; 
    if (datatype(key) !== 'string' && !key ) {  
        throw new Error('key is invalid');  
    }  
    if (datatype(url) !== 'string' || url.trim() === '') {  
        throw new Error('URL is required and must be a non-empty string');  
    }  
    if (datatype(method) !== 'string' || !Object.values(httpMethod).includes(method.toUpperCase())) {  
        throw new Error('HTTP method is invalid or not supported');  
    }  
    const existingRequest = requests.find(o => o.key === key);  
    if (existingRequest) {  
        existingRequest.status = fnStatus.CONSTANT_WAIT;  
    } else {  
        requests.push({  
            key: key,  
            url: url,  
            method: method,  
            params: params,  
            status: fnStatus.CONSTANT_WAIT  
        });  
    }  
};

// let getDatas = function () {
//     let sendFn = requestFn.filter((o) => { o.status == fnStatus.CONSTANT_WAIT});
//     if (sendFn.length) {
//         sendFn.forEach((o) => {
//             let sdata = o.fn();
//             if(datas.length && datas.filter((d)=>{
//                 if(o.key == d.key) d.data = sdata;
//             }));
//             else{
//                 datas.push(`{"key":${o.key},"data":${sdata}`);
//             }
//         });
//     }
// }



document.addEventListener('DOMContentLoaded', async function (){
   await  request();
});

export default {getDatasShared,getRequestsShared,createRequest,setDatasShared,render}


