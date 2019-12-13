function pow(n, power) {
    let result = 1;
    let negative = false;
    if (power < 0) {
        negative = true;
    }
    power = Math.abs(power);
    for (let i = 1; i <= power; i++) {
        result *= n;
    }
    if (power % 2 !== 0 && negative) {
        result -= result * 2;
    }
    return result;
}

console.log(pow(3, -3));