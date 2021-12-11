function twoStrings(s1, s2) {
    for (let char of s1) {
        if (s2.includes(char)) {
            return 'YES';
        }
    }

    return 'NO';
}

console.log(twoStrings('and', 'art'));
console.log(twoStrings('be', 'cat'));