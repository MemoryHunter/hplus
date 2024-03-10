export default function(o){
    let type = typeof obj;
    console.log(type);
    if(type !='object') return type;

    let rtn = Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/g,"$1");
    return rtn;
}