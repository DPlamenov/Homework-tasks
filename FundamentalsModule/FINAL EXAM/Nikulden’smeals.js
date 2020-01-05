function solve(input) {
    let command = input.shift();
    let output = [];
    let unliked = 0;
    while (command !== "Stop") {
        let [likeOrUnlike, name, food] = command.split('-');
        if (likeOrUnlike === "Like") {
            let isExist = false;
            output.forEach(function (value) {
                if (value.name === name) {
                    isExist = true;
                }
            });
            if (!isExist) {
                output.push({
                    'name': name,
                    'foods': []
                });
            }
            output.forEach(function (value, index, array) {
                if (value.name === name) {
                    let foods = value.foods;
                    if (!foods.includes(food)) {
                        foods.push(food);
                    }
                }
            });
        } else {
            let removed = false;
            output.forEach(function (value, index, array) {
                if (value.name === name) {
                    let foods = value.foods;
                    if (foods.includes(food)) {
                        let index = foods.indexOf(food);
                        removed = true;
                        foods.splice(index, 1);
                        unliked++;
                        console.log(`${name} doesn't like the ${food}.`);
                    }
                }
            });
            if (!removed) {
                let peopleExists = false;
                output.forEach(function (value) {
                    if (value.name === name) {
                        peopleExists = true;
                    }
                });
                if (peopleExists) {
                    output.forEach(function (value, index, array) {
                        let foods = value.foods;
                        if(value.name === name){
                            if (!foods.includes(food)) {
                                console.log(`${name} doesn't have the ${food
                                } in his/her collection.`);
                            }
                        }
                    });
                } else {
                    console.log(`${name} is not at the party.`);
                }
            }
        }
        command = input.shift();
    }
    output.sort(function (a, b) {
        if(b.foods.length - a.foods.length === 0){
            return a.name.localeCompare(b.name);
        }
        return b.foods.length - a.foods.length;
    });
    output.forEach(function (v) {
        let name = v.name;
        let foods = v.foods;
        let string = name + ': ' + foods.join(', ');
        console.log(string);
    });
    console.log(`Unliked meals: ${unliked}`);
}

solve([
    "Like-Mike-frenchFries",
    "Like-Mike-salad",
    "Like-George-salad",
    "Like-Steven-salad",
    "Unlike-Steven-salad",
    "Unlike-Steven-fruit",
    "Stop"
]);
