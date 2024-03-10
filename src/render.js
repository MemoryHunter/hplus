import { datastatus } from "./constant";

export default function (key, datas) {
    let selectorstr = `[h-data="${key}"]`;
    let element = document.querySelector(selectorstr);
    let temp = element.querySelector('[template]');
    let renderhtml = temp.outerHTML;
    datas.forEach(d => {
        let replacedhtml = replacevariable(renderhtml,d);
        console.log(replacedhtml);
        replacehtml(element, replacedhtml);
    });
}

function replacehtml(element, renderhtml) {
    element.insertAdjacentHTML('beforeend', renderhtml);
}

function removeTemplate(htmlString) {  
    const regex = /(template="[^"]*"|template)/g;  
    const replacedHtml = htmlString.replace(regex, '');  
    return replacedHtml;  
  } 

function replacevariable(htmlString, vars) {  
    htmlString = removeTemplate(htmlString);
    console.log(htmlString);
    return htmlString.replace(/{{(\w+)}}/g, (match, key) => vars[key] || match);  
  } 
