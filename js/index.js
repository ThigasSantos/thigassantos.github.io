const removeExtraSpaces = (textContent) => {
    let styledTextContent = ""
    let isBegin = true;
    let spacesCounter = 0;
    
    for(let i = 0; i < textContent.length; i++) {
        let c = textContent[i];
        if((c === ' ' || c === '\n') && isBegin){
            if (c === '\n') spacesCounter = 0
            spacesCounter++;
            continue;
        }
        else isBegin = false;
        if (c === '\n') i += spacesCounter-1;
        styledTextContent += c;
    }
return styledTextContent;
}
 
document.querySelectorAll('pre').forEach((el) => {
    el.innerHTML = removeExtraSpaces(el.innerHTML);
})

document.querySelectorAll('pre > code').forEach((el) => {
    el.classList.add('language-html')
})

document.querySelectorAll('p').forEach((el) => {
    const c = document.createElement('code')
    c.classList.add('language-html')
    c.textContent = el.textContent;
    c.style.fontFamily = "Arial, Helvetica, sans-serif";
    el.innerHTML = ""
    el.appendChild(c)
})