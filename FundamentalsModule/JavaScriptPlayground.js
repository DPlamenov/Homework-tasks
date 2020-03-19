let input = ['ax@@z!', 'ar@@sdsf!', '@!'];
let pattern = /a[a-z]+@{2}([a-z]+)\!/;
input.forEach(function (element) {
    let result = element.match(pattern);
    if (result !== null)
        console.log(result);
    console.log(result);
});