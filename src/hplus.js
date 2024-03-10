import datatype from "./datatype";
import { fnstatus } from "./constant";
import render from "./render";


let arraydata = [];
let arraygetdatafun = [];

let createdatafn = function (key, fn) {
    if (datatype(fn) !== 'Function') {
        throw new Error('get data function is invalids');
    }
    if(arraygetdatafun.length && arraygetdatafun.find((o)=>{ o.key == key})){
        arraygetdatafun.find((o)=>{ o.status = fnstatus.CONSTANT_WAITCALL})
    }
    arraygetdatafun.push(`{"key":${key},fn:${fn},"status":${fnstatus.CONSTANT_WAITCALL}}`)
}

let getdatas = function () {
    let needexefn = arraygetdatafun.filter((o) => { o.status == fnstatus.CONSTANT_WAITCALL});
    if (needexefn.length) {
        needexefn.forEach((o) => {
            let sdata = o.fn();
            if(arraydata.length && arraydata.filter((d)=>{
                if(o.key == d.key) d.data = sdata;
            }));
            else{
                arraydata.push(`{"key":${o.key},"data":${sdata}`);
            }
        });
    }
}


export default { createdatafn ,getdatas,render}

