class Forum {

    #users;
    #questions;
    #id;
    constructor() {
        this.#users = [];
        this.#questions = [];
        this.#id = 1;
    }

    register(...args) {
        let [username, password, repeatPassword, email] = args;

        if (username === '' || password === '' || repeatPassword === '' || email === '' ||
            username === undefined || password === undefined || repeatPassword === undefined || email === undefined) {
            throw new Error('Input can not be empty');
        }

        if (password !== repeatPassword) {
            throw new Error('Passwords do not match');
        }

        if (this.#users.find(e => e.username === username)) {
            throw new Error('This user already exists!');
        }

        let user = {
            username: username,
            password: password,
            email: email,
            isLogin: false
        };
        this.#users.push(user);
        return `${username} with ${email} was registered successfully!`;
    }

    login(username, password) {
        let u = this.#users.find(e => e.username === username);
        if (!u) {
            throw new Error('There is no such user');
        }
        if(u.password !== password){
            return;
        }
        u.isLogin = true;
        return `Hello! You have logged in successfully`;
    }

    logout(username, password) {
        let u = this.#users.find(e => e.username === username && e.password === password);
        if (!u) {
            throw new Error('There is no such user');
        }

        u.isLogin = false;
        return `You have logged out successfully`;
    }

    postQuestion(username, question) {
        let u = this.#users.find(e => e.username === username && e.isLogin === true);
        if (!u) {
            throw new Error('You should be logged in to post questions');
        }

        if (question === '') {
            throw new Error('Invalid question');
        }

        let id = this.#questions.length + 1;
        let obj = {
            id: id,
            username,
            question,
            answers: []
        };
        this.#questions.push(obj);
        return 'Your question has been posted successfully';
    }

    postAnswer(username, questionId, answer) {
        let u = this.#users.find(e => e.username === username && e.isLogin === true);
        if (!u) {
            throw new Error('You should be logged in to post answers');
        }

        if (answer === '') {
            throw new Error('Invalid answer');
        }

        let question = this.#questions.find(e => e.id === questionId);

        if (!question) {
            throw new Error('There is no such question');
        }

        question.answers.push({
            answer,
            username
        });
        return 'Your answer has been posted successfully';

    }

    showQuestions() {
        let output = [];
        this.#questions.forEach(function (element) {
            output.push(`Question ${element.id} by ${element.username}: ${element.question}`);
            element.answers.forEach(function (a) {
                output.push(`---${a.username}: ${a.answer}`);
            });
        });
        return output.join('\n');
    }
}

let forum = new Forum();

forum.register('a', 'b', 'b', 'e');
forum.login('a', 'b');

let r = forum.postQuestion('a', 'how');
console.log(r);
