function solve(input) {
    let paintings = input.shift().split(' ').map(Number);
    let commands = input.slice();
    commands.forEach(function (element) {
        if (element.includes('Change')) {
            let paintingNumber = Number(element.split(' ')[1]);
            let changeNumber = Number(element.split(' ')[2]);
            if (paintings.includes(paintingNumber)) {
                let indexOf = paintings.indexOf(paintingNumber);
                paintings.splice(indexOf, 1, changeNumber);
            }
        } else if (element.includes('Hide')) {
            let paintingNumber = Number(element.split(' ')[1]);
            if (paintings.includes(paintingNumber)) {
                let indexOf = paintings.indexOf(paintingNumber);
                paintings.splice(indexOf, 1);
            }
        } else if (element.includes('Switch')) {
            let paintingNumber = Number(element.split(' ')[1]);
            let paintingNumber2 = Number(element.split(' ')[2]);

            if (paintings.includes(paintingNumber) && paintings.includes(paintingNumber2)) {
                let index1 = paintings.indexOf(paintingNumber);
                let index2 = paintings.indexOf(paintingNumber2);

                paintings[index1] = paintingNumber2;
                paintings[index2] = paintingNumber;
            }
        } else if (element.includes('Insert')) {
            let place = Number(element.split(' ')[1]);
            let paintingNumber = Number(element.split(' ')[2]);

            if (place + 1 >= 0 && place + 1 < paintings.length) {
                paintings.splice(place + 1, 0, paintingNumber);
            }
        } else if (element.includes('Reverse')) {
            paintings = paintings.reverse();
        }
    });
    console.log(paintings.join(' '));
}
