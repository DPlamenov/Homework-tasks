import * as api from './apiConnection.js';
import * as render from './render.js';

render.init()
    .setCreateHandler(createStudentHandler);

const load = (function load() {
    api.getAllStudents()
        .then(students => {
            render.emptyStudentTable();

            students.sort((a, b) => {
                return a.ID - b.ID;
            })
                .forEach(student => render.renderStudent(student));
        });

    return load;
})();

function createStudentHandler(student) {
    api.createStudent(student)
        .then(load);
}