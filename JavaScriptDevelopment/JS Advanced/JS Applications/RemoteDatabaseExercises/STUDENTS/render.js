const tableBody = document.querySelector('#results tbody');
const createButton = document.querySelector('#create');
const form = document.querySelector('form');

let createHandler = undefined;

export function renderStudent(student) {
    const studentTr = document.createElement('tr');

    const studentIdTd = document.createElement('td');
    const studentFistNameTd = document.createElement('td');
    const studentLastNameTd = document.createElement('td');
    const studentFacultyTd = document.createElement('td');
    const studentGradeTd = document.createElement('td');

    studentIdTd.textContent = student.ID;
    studentFistNameTd.textContent = student.FirstName;
    studentLastNameTd.textContent = student.LastName;
    studentFacultyTd.textContent = student.FacultyNumber;
    studentGradeTd.textContent = student.Grade;

    studentTr.appendChild(studentIdTd);
    studentTr.appendChild(studentFistNameTd);
    studentTr.appendChild(studentLastNameTd);
    studentTr.appendChild(studentFacultyTd);
    studentTr.appendChild(studentGradeTd);

    tableBody.appendChild(studentTr);
}

export function init() {
    return {
        setCreateHandler(handler) {
            createHandler = handler;
        }
    };
}

export function emptyStudentTable() {
    tableBody.innerHTML = '';
}

function clearInputFields() {
    const inputs = Array.from(form.querySelectorAll('input'));

    inputs.forEach(input => {
        input.value = '';
    });
}

createButton.addEventListener('click', (e) => {
    e.preventDefault();

    const allInputs = Array.from(form.querySelectorAll('input'));

    const student = allInputs.reduce((acc, current) => {
        acc[current.id] = current.value;

        return acc;
    }, {});

    createHandler(student);

    clearInputFields();
});