export default function (key, datas) {
    let selectorstr = `[h-data="${key}"]`;
    let element = document.querySelector(selectorstr);
    if (!element) return;
    let temp = element.querySelector('[template]');
    if (!temp) return;

    datas.forEach(data => {  
        let rendertemp = temp.cloneNode(true);
        rendertemp.removeAttribute('template'); 
        replaceBindings(rendertemp,data);
        temp.parentElement.appendChild(rendertemp);  
    });  
}

function replaceBindings(element, data) {  
   
    for (let i = 0; i < element.attributes.length; i++) {  
        const attr = element.attributes[i]; 
        if (attr.value.includes('{{')) {  
            attr.value = replaceText(attr.value, data);  
        }  
    }  

    for (let child of element.childNodes) {  
        if (child.nodeType === Node.TEXT_NODE) {  
            child.textContent = replaceText(child.textContent, data);  
        } else if (child.nodeType === Node.ELEMENT_NODE) {  
            replaceBindings(child, data);  
        }  
    }  
}

function replaceText(text, data) {  
    const regex = /\{\{([^}]+)\}\}/g;  
    return text.replace(regex, (match, key) => {  
        return data.hasOwnProperty(key) ? data[key] : ''; 
    });  
} 
