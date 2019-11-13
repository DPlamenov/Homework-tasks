function f(arr) {
    let result = new Map();
    for (let i = 0; i < arr.length ; i++) {
        result[arr[i].split(" ")[0]] = arr[i].split(" ")[1];
    }
    for (let key in result){
        let value = result[key];
        console.log(`${key} -> ${value}`);
    }
}


f(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);