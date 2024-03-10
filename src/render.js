import { datastatus } from "./constant";

export default function(key,datas){
   let selectorstr = `[h-data="${key}"]`;
   let element = document.querySelector(selectorstr); 
   let temp =  element.querySelector('[template]');
   
   let renderhtml = temp.outerHTML;
   datas.forEach(d => {
        
   });

   element.insertAdjacentHTML('beforeend', newHtml);

}