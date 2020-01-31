function solve(string = '') {
    let firstString = string.substring(0, string.length / 2);
    let secondString = string.substring(string.length / 2);

    console.log(firstString.split('').reverse().join(''));
    console.log(secondString.split('').reverse().join(''));
}

solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');