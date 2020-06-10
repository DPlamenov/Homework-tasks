function el(tagName, text, classList, attributes, children) {
    let element = document.createElement(tagName);

    if (text !== undefined) {
        if (tagName === 'input') {
            element.value = text;
        } else {
            element.textContent = text;
        }
    }

    if (classList !== undefined) {
        classList.forEach(className => element.classList.add(className));
    }

    if (attributes !== undefined) {
        attributes.forEach(attrObject => element.setAttribute(attrObject.key, attrObject.value));
    }

    if (children !== undefined) {
        children.forEach(c => {
            if (typeof c === 'string') {
                c = document.createTextNode(c);
            }
            element.appendChild(c);
        });


    }
    return element;
}

