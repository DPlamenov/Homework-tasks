function solve(input) {
    let count = Number(input.shift());

    for (let i = 0; i < count; i++) {
        let currentElement = input[i];

        let result = isValid(currentElement);
        if(result){
            let groups = result.slice(2);
            let message = groups.slice(1).map(Number).map(e => String.fromCharCode(e)).join('');
            let tag = groups[0];
            console.log(`${tag}: ${message}`);
        } else {
            console.log("Valid message not found!");
        }
        // console.log(result);
    }

    function isValid(text) {
        let pattern = /^([$%])([A-Z][a-z]{2,})\1: \[(\d+)]\|\[(\d+)]\|\[(\d+)]\|$/;
        return text.match(pattern);
    }
}

solve([
        '3',
        'This shouldnt be valid%Taggy%: [118]|[97]|[108]|',
        '$tAGged$: [97][97][97]|',
        '$Request$: [73]|[115]|[105]|true'
    ]

);