function f(arr) {
    let username = arr[0];
    let password = username.split('').reverse().join('');

    let counter = 1;
    let password2 = arr[counter];
    let isBlocked = false;
    while (!(password === password2)) {
        if (counter === 4) {
            console.log(`User ${username} blocked!`);
            isBlocked = true;
            break;
        }
        console.log(`Incorrect password. Try again.`);

        password2 = arr[counter + 1];
        counter++;
    }
    if (!isBlocked) {
        console.log(`User ${username} logged in.`);
    }
}

