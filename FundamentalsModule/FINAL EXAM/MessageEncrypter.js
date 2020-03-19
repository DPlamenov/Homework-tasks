function solve(input) {
    let pattern = /(\*|@)(?<tag>[A-Z][a-z]{2,})\1: \[(?<c1>([A-Z]|[a-z]))\]\|\[(?<c2>([A-Z]|[a-z]))\]\|\[(?<c3>([A-Z]|[a-z]))\]\|$/;
    let count = Number(input.shift());
    for (let i = 0; i < count; i++) {
        let current = input[i];
        let valid = isValid(current);
        if (valid !== null) {
            let tag = valid.tag;
            let ascii = [valid.c1, valid.c2, valid.c3];
            ascii = ascii.map(e => e.charCodeAt(0));
            console.log(`${tag}: ${ascii.join(' ')}`);
        } else {
            console.log("Valid message not found!");
        }

    }
    function isValid(text) {
        let r = text.match(pattern);
        return r !== null ? r.groups : null;
    }
}

solve([
        '4',
        '*Request*: [I]|[s]|[i]|',
        '*Taggy@: [73]|[73]|[73]|',
        'Should be valid @Taggy@: [v]|[a]|[l]|',
        '@Hihowareyou@: [f]|[r]|[f]|'
    ]
);