function f() {
    let prototype = {};
    let obj = {
        extend: function (template) {
            for (let i of Object.keys(template)) {
                let value = template[i];
                if (typeof value === 'function') {
                    prototype[i] = value;
                } else {
                    obj[i] = value;
                }
            }
        }
    };
    Object.setPrototypeOf(obj, prototype);
    return obj;
}