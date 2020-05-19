function solve() {
    let quickCheckBtn = document.querySelector('button');
    let clearBtn = Array.from(document.querySelectorAll('button'))[1];

    quickCheckBtn.addEventListener('click', check);
    clearBtn.addEventListener('click', clear);

    let table = document.querySelector('table');
    let checkP = document.querySelector('#check p');
    function check() {
        let numbers = Array.from(document.querySelectorAll('input'));

        let rows =
            [numbers.slice(0, 3), numbers.slice(3, 6), numbers.slice(6)];

        let columns = [numbers.slice(0, 1).concat(numbers.slice(3, 4)).concat(numbers.slice(6, 7)),
            numbers.slice(1, 2).concat(numbers.slice(4, 5)).concat(numbers.slice(7, 8)),
            numbers.slice(2, 3).concat(numbers.slice(5, 6)).concat(numbers.slice(8, 9))];


        rows = rows.map(e => e.map(e => e.value));
        columns = columns.map(e => e.map(e => e.value));


        let isValid = true;

        for (let row of rows) {
            for (let element of row) {
                let findItems = row.filter(e => e === element).length;

                if (findItems > 1) {
                    isValid = false;
                }
            }
        }

        for (let column of columns) {
            for (let element of column) {
                let findItems = column.filter(e => e === element).length;

                if (findItems > 1) {
                    isValid = false;
                }
            }
        }

        if (isValid) {
            table.style.border = '2px solid green';
            checkP.textContent = 'You solve it! Congratulations!';
            checkP.style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            checkP.textContent = 'NOP! You are not done yet...';
            checkP.style.color = 'red';
        }
    }

    function clear() {
        let numbers = Array.from(document.querySelectorAll('input'));
        table.style.border = '';
        checkP.textContent = '';
        numbers.forEach(e => {
            e.value = '';
        });
    }

}