function result() {
    let bugs = [];

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

    function createReport(bug){
        return el('div', undefined, ['report'], [{
            key: 'id',
            value: `report_${bug.ID}`
        }], [
            el('div', undefined, ['body'], undefined, [
                el('p', bug.description)
            ]),
            el('div', undefined, ['title'], undefined, [
                el('span', `Submitted by: ${bug.author}`, ['author']),
                el('span', `${bug.status} | ${bug.severity}`, ['status'])
            ])
        ]);
    }

    let output;
    return {
        report(author, description, reproducible, severity) {
            let bug = {
                ID: bugs.length,
                author,
                description,
                reproducible,
                severity,
                status: 'Open'
            };

            output.appendChild(createReport(bug));
            bugs.push(bug);
        },
        setStatus(id, newStatus) {
            let bug = bugs.find(e => e.ID === id);

            let bugElement = document.querySelector(`#report_${id}`);
            let status = bugElement.querySelector('.status');
            status.textContent = status.textContent.toString().replace(bug.status, newStatus);
            bug.status = newStatus;
        },
        remove(id) {
            let bugIndex = bugs.findIndex(e => e.ID === id);
            bugs.splice(bugIndex, 1);
            let bugElement = document.querySelector(`#report_${id}`);
            bugElement.remove();
        },
        sort(method = 'ID') {
            output.innerHTML = '';
            bugs.sort((a, b) => {

                return a[method].toString().localeCompare(b[method]);
            });
            bugs.forEach(e => output.appendChild(createReport(e)));

        },
        output(selector) {
            output = document.querySelector(selector);
        }
    };
}