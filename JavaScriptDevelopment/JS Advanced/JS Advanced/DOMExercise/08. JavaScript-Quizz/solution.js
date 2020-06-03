// function solve() {
//     let sections = Array.from(document.querySelectorAll('section'));
//     let answers = [2, 4, 2];
//     let pContent = document.querySelector('#quizzie');
//
//     pContent.addEventListener('click', click);
//
//     let rightAnswers = 0;
//     let activeIndex = 0;
//
//     function click(e) {
//         let target = e.target;
//         if (target.tagName !== 'P') {
//             return;
//         }
//
//         let quizIndex = Number(target.parentNode.parentNode.dataset.quizindex);
//         let active = sections[activeIndex];
//         if (answers[activeIndex] === quizIndex) {
//             rightAnswers++;
//         }
//
//         active.style.display = 'none';
//
//         if (activeIndex === 2) {
//             let result = document.querySelector('#results');
//             let h1 = result.querySelector('h1');
//
//             if (rightAnswers === 3) {
//                 h1.textContent = 'You are recognized as top JavaScript fan!';
//             } else {
//                 h1.textContent = `You have ${rightAnswers} right answers`;
//             }
//
//             result.style.display = 'block';
//             return;
//         }
//
//         sections[activeIndex + 1].style.display = 'block';
//         activeIndex++;
//     }
// }
//
// function solve1() {
//     let correctAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
//     let rightAnswered = 0;
//     let index = 0;
//
//     Array
//         .from(document.querySelectorAll(".answer-text"))
//         .map((x) => x.addEventListener("click", function nextSection(e) {
//
//             if (correctAnswers.includes(e.target.innerHTML)) {
//                 rightAnswered++;
//             }
//
//             let currSection = document.querySelectorAll("section")[index];
//             currSection.style.display = "none";
//
//             if (document.querySelectorAll("section")[index + 1] !== undefined) {
//                 let nextSection = document.querySelectorAll("section")[index + 1];
//                 nextSection.style.display = "block";
//                 index++;
//             } else {
//                 document.querySelector("#results").style.display = "block";
//                 if (rightAnswered !== 3) {
//                     document.querySelector("#results h1").innerHTML = `You have ${rightAnswered} right answers`;
//                 } else {
//                     document.querySelector("#results h1").innerHTML = "You are recognized as top JavaScript fan!";
//                 }
//             }
//         }));
// }

function solve() {
    let answers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let rightAnswers = 0;
    let index = 0;
    Array.from(document.querySelectorAll('p')).map(e => {
        e.addEventListener('click', function (e) {
            let target = e.target;
            let text = target.innerText;

            if (answers[index] === text) {
                rightAnswers++;
            }

            let section = Array.from(document.querySelectorAll('section'))[index];
            section.style.display = 'none';

            if (index === 2) {
                let result = document.querySelector('#results');
                let h1 = document.querySelector('#results h1');

                if (rightAnswers === 3) {
                    h1.innerText = 'You are recognized as top JavaScript fan!';
                } else {
                    h1.innerText = `You have ${rightAnswers} right answers`;
                }
                result.style.display = 'block';
            } else {
                document.querySelectorAll('section')[index + 1].style.display = 'block';
            }

            index++;
        });
    });
}