function solve(input) {
    let objects = {};

    input.forEach(c => {
        let tokens = c.split(' ');
        if (tokens.length === 2 && tokens[0] === 'create') {
            create(tokens);
        } else if (tokens.length === 4 && tokens[0] === 'create' && tokens[2] === 'inherit') {
            inherits(tokens);
        } else if (tokens.length === 4 && tokens[0] === 'set') {
            set(tokens);
        } else if (tokens.length === 2 && tokens[0] === 'print') {
            print(tokens);
        }
    });

    function create(tokens) {
        let newObjName = tokens[1];
        objects[newObjName] = {};
    }

    function inherits(tokens) {
        let newObjName = tokens[1];
        let inherit = tokens[3];

        objects[newObjName] = Object.create(objects[inherit]);
    }

    function set(tokens) {
        let [name, key, value] = tokens.slice(1);
        objects[name][key] = value;
    }

    function print(tokens) {
        let name = tokens[1];
        let currentObj = objects[name];
        let output = [];

        for (let i in currentObj) {
            output.push(`${i}:${currentObj[i]}`);
        }

        console.log(output.join(', '));
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);