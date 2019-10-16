function f(arr) {
    let bitcoin = 0;
    let firstCoin = 0;
    let leftMoney = 0;

    for (let i = 0; i < arr.length; i++) {
        let gramsOfGold = arr[i];
        if ((i + 1) % 3 === 0) {
            gramsOfGold *= 0.70;
        }
        leftMoney += gramsOfGold * 67.51;
        let toBuy = Math.floor(leftMoney / 11949.16);
        if (leftMoney >= 11949.16) {
            bitcoin+=toBuy;
            leftMoney -= toBuy * 11949.16;
            if(firstCoin === 0){
                firstCoin = i + 1;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    if(firstCoin !== 0){
        console.log(`Day of the first purchased bitcoin: ${firstCoin}`);
    }
    console.log(`Left money: ${leftMoney.toFixed(2)} lv.`);
}