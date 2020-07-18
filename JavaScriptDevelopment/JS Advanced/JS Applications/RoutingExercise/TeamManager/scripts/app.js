// TODO
import * as user from './user.js';
import * as teams from './teams.js';

const templatesUrl = './templates';

function extend(context, templates) {
    const partials = {
        header: '../templates/common/header.hbs',
        footer: '../templates/common/footer.hbs'
    };

    context.loggedIn = localStorage.getItem('userId') !== null;
    context.username = localStorage.getItem('username');
    context.hasNoTeam = localStorage.getItem('teamId') === 'null';
    if (Array.isArray(templates)) {
        templates.forEach(template => {
            const templateName = template.split('/')
                .pop();
            partials[templateName] = `${templatesUrl}/${template}.hbs`;
        });
    }

    return context.loadPartials(partials);
}

const app = new Sammy('#main', function () {
    this.use('Handlebars', 'hbs');

    this.get('#/home', function (context) {
        extend(context)
            .then(function () {
                this.partial('./templates/home/home.hbs');
            });
    });

    this.get('#/about', function (context) {
        extend(context)
            .then(function () {
                this.partial('./templates/about/about.hbs');
            });
    });

    this.get('#/login', function (context) {
        extend(context, ['login/loginForm'])
            .then(function () {
                this.partial('./templates/login/loginPage.hbs');
            });
    });

    this.get('#/register', function (context) {
        extend(context, ['register/registerForm'])
            .then(function () {
                this.partial('./templates/register/registerPage.hbs');
            });
    });

    this.post('#/login', function (context) {
        extend(context)
            .then(function () {
                const data = { ...context.params };
                user.login(data.username, data.password)
                    .then(function (user) {
                        if (user.message) {
                            alert(user.message);
                            return;
                        }
                        localStorage.setItem('userId', user.objectId);
                        localStorage.setItem('userToken', user['user-token']);
                        localStorage.setItem('username', user.username);
                        localStorage.setItem('teamId', user.teamId || null);
                        context.redirect('#/home');
                    });
            });
    });

    this.post('#/register', function (context) {
        extend(context)
            .then(function () {
                const data = { ...context.params };

                user.register(data.username, data.password)
                    .then(() => {
                        context.redirect('#/login');
                    });
            });
    });

    this.get('#/logout', function (context) {
        extend(context)
            .then(function () {
                user.logout(localStorage.getItem('userToken'))
                    .then(r => {
                        localStorage.clear();
                        context.redirect('#/home');
                    });
            });
    });

    this.get('#/catalog', function (context) {
        extend(context, ['catalog/team'])
            .then(function () {
                teams.getAll()
                    .then((data) => {
                        context.teams = data;
                        this.partial('./templates/catalog/teamCatalog.hbs');
                    });
            });
    });

    this.get('#/create', function (context) {
        extend(context, ['create/createForm'])
            .then(function () {
                this.partial('./templates/create/createPage.hbs');
            });
    });

    this.post('#/create', function (context) {
        extend(context)
            .then(function () {
                const data = { ...context.params };
                const token = localStorage.getItem('userToken');
                const userId = localStorage.getItem('userId');

                teams.create(data, token)
                    .then(function (team) {
                        user.changeTeamId(token, userId, team.objectId)
                            .then(function () {
                                localStorage.setItem('teamId', team.objectId);
                                context.redirect('#/catalog');
                            });
                    });
            });
    });

    this.get('#/catalog/:teamId', async function (context) {
        extend(context, ['catalog/teamControls', 'catalog/teamMember'])
            .then(function () {
                const teamId = { ...context.params }.teamId;

                teams.getTeamById(teamId)
                    .then((currentTeam) => {
                        context.name = currentTeam.name;

                        user.getUsersByTeamId(currentTeam.objectId)
                            .then((members) => {
                                context.members = members;
                                context.comment = currentTeam.comment;
                                context.isAuthor = currentTeam.ownerId === localStorage.getItem('userId');
                                context.isOnTeam = currentTeam.objectId === localStorage.getItem('teamId');
                                this.partial('./templates/catalog/details.hbs');
                            });
                    });
            });
    });

    this.get('#/leave', function (context) {
        extend(context)
            .then(function () {
                const token = localStorage.getItem('userToken');
                const userId = localStorage.getItem('userId');

                user.changeTeamId(token, userId, null)
                    .then(function () {
                        localStorage.setItem('teamId', null);
                        context.redirect('#/catalog');
                    });
            });
    });

    this.get('#/edit', function (context) {
        extend(context, ['edit/editForm'])
            .then(function () {
                this.partial('./templates/edit/editPage.hbs');
            });
    });
});


(function () {
    app.run('#/home');
})();