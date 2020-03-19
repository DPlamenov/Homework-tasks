function solve(input) {
    let pattern = /(^|(?<=\s))(([a-zA-Z0-9]+)([.\-_]?)([A-Za-z0-9]+))@(?<host>[a-zA-Z]+([.\-_][A-Za-z]+)+)/g;
    let text = input[0];

    let email;
    while ((email = pattern.exec(text)) !== null){
        console.log(email[0]);
    }
}

solve(['Many users abv@bg.bg SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.', 'end']);