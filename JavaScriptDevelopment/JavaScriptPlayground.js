function minimumNumber(n, password) {
    const numbers = "0123456789";
    const lower_case = "abcdefghijklmnopqrstuvwxyz";
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const special_characters = "!@#$%^&*()-+";

    let needChars = 0;

    if (!/[0-9]/.test(password)) {
        needChars++;
    }

    if (!/[a-z]/.test(password)) {
        needChars++;
    }

    if (!/[A-Z]/.test(password)) {
        needChars++;
    }

    if (!/[!@#$%^&*()\-+]/.test(password)) {
        needChars++;
    }

    if (n + needChars < 6) {
        needChars += 6 - (n + needChars);
    }

    return needChars;
}

console.log(minimumNumber(3, 'Ab1'));
console.log(minimumNumber(11, '#HackerRank'));