function f(arr) {
    function palindrome(arr) {
        arr.forEach(function (e) {
            let reversed = e.toString().split('').reverse().join('');
            if (e === Number(reversed)) {
                console.log('true');
            } else {
                console.log('false');
            }
        });
    }

    palindrome(arr);
}