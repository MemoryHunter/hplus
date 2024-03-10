### html natural defect
---
#### Since the invention of HTML, it has always been used for hypertext presentation, suffering from a lack of scalability and interactivity. Although W3C has been constantly improving HTML, this defect has never been completely resolved. 
#### e.g. We want to assign a data attribute to the select element, and when we assign values such as "english", "spanish", "french", "german" to the data attribute, it can automatically generate four <option> elements like <option value="english">English</option>
```html
    <select id="languages" name="languages" data>  
        <option value="english">English</option>  
        <option value="spanish">Spanish</option>  
        <option value="french">French</option>  
        <option value="german">German</option>  
    </select>  
```
---
### The two core issues addressed by modern JavaScript frameworks are:
#### How to render data-related HTML to the user interface (UI)?
#### How to get user input data form UI to model?
---
### Angular React Vue defect
#### The dominance of JavaScript in controlling everything has led to the increasing complexity of frameworks, yet they are often perceived as being limited to single-page applications only.
#### The practice of mixing JavaScript and HTML together is not conducive to the separation of the UI layer and logic, and it is even less conducive to the development of HTML
---
### Nowadays, we strongly recommend that W3C improve HTML, but before W3C makes any changes, we propose a solution
#### e.g ol has a custom attribute h-data="menu",h-data is a marker that indicates the child elements of this element need to be rendered based on data
```html
     <div>
        <ol h-data="menu">
            <li template class="template"><a href="{{b}}" text="{{a}}"></a></li>
        </ol>
    </div>
```
#### The 'template' tag serves as a template for rendering HTML, while {{b}} and {{a}} are placeholders that need to be replaced based on data. This allows us to achieve client-side rendering based on data.
#### Certainly, we will subsequently provide a solution for how to collect data from users.
---
### Completing this framework is a challenging, exciting, and monumental undertaking.
#### If you are interested, please join our development team(appleitem@163.com).
#### If you appreciate the value of our work, you can make a direct donation to our Alipay account(appleitem@163.com).
---
