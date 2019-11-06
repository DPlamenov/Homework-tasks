function f(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    //•	First parameter – lost fights count – integer in the range [0, 1000].
    // •	Second parameter – helmet price - floating point number in range [0, 1000].
    // •	Third parameter – sword price - floating point number in range [0, 1000].
    // •	Fourth parameter – shield price - floating point number in range [0, 1000].
    // •	Fifth parameter – armor price - floating point number in range [0, 1000].

    let total = 0.0;

    let shieldBrake = 0;
    for (let i = 1; i <= lostFightsCount; i++) {
            if (i % 2 === 0) {
                total += helmetPrice;
            }
            if (i % 3 === 0) {
                total += swordPrice;
            }
            if (i % 2 === 0 && i % 3 === 0) { // 12
                shieldBrake++; //2
                total += shieldPrice;
            }
        if (shieldBrake % 2 === 0 && shieldBrake !== 0) {
            total += armorPrice;
            shieldBrake = 0;
        }
        //console.log(total);
    }

    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}
