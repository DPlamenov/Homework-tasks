let obj = {
    'name': 'Peter'
}

function getName() {
    let f = () => this.name;
    return f();
}

console.log(getName.call(obj));