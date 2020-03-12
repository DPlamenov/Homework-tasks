function solve(input) {
    let list = input.shift().split('!');

    input.forEach(e => {
        let [command, ...arguments] = e.split(' ');
        if(command === 'Urgent'){
            let item = arguments[0];
            if(!list.includes(item)){
                list.unshift(item);
            }
        } else if(command === 'Unnecessary'){
            let item = arguments[0];
            let indexOf = list.indexOf(item);
            if(indexOf >= 0){
                list.splice(indexOf, 1);
            }
        } else if(command === 'Correct'){
            let oldItem = arguments[0];
            let newItem = arguments[1];

            let indexOfOldItem = list.indexOf(oldItem);
            if(indexOfOldItem >= 0){
                list.splice(indexOfOldItem, 1, newItem);
            }
        } else if(command === 'Rearrange'){
            let item = arguments[0];
            let indexOf = list.indexOf(item);

            if(indexOf >= 0){
                list.splice(indexOf, 1);
                list.push(item);
            }
        }
    });

    console.log(list.join(', '));
}

solve([
        'Tomatoes!Potatoes!Bread',
        'Unnecessary Milk',
        'Urgent Tomatoes',
        'Go Shopping!'
    ]
);