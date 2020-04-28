class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        let simpleEmailPattern = /[a-zA-Z]+@([a-zA-Z])/g;
        let namesPattern = /[a-zA-Z]+/g;
        if(clientId.length !== 6){
            throw new TypeError('Client ID must be a 6-digit number');
        }

        if(!simpleEmailPattern.test(email)){
            throw new TypeError('Invalid e-mail')
        }

        if(firstName.length < 3 || firstName.length > 20){
            throw new TypeError('First name must be between 3 and 20 characters long');
        }

        if(lastName.length < 3 || lastName.length > 20){
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }

        if(!namesPattern.test(firstName)){
            throw new TypeError('First name must contain only Latin characters');
        }

        if(!namesPattern.test(lastName)){
            throw new TypeError('Last name must contain only Latin characters');
        }
    }
}
