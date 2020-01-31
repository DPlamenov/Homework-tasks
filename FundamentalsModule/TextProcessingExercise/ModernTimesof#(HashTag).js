function solve(str) {
    let words = str.split(' ');
    let result = [];
    words.forEach(function (element) {
        if (element.charAt(0) === '#') {
            let flag = true;
            element = element.replace('#', '');
            for (let i = 0; i < element.length; i++) {
                let charCode = element.charCodeAt(i);
                if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))) {
                    flag = false;
                }
            }
            if (flag === true && element !== '') {
                result.push(element);
            }
        }
    });
    result.forEach(function (element) {
        console.log(element);
    })
}

solve('Nowadays everyone uses #');