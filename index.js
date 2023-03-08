import { smiles } from "./smiles.js";
const answers = document.querySelector('.smiles');

function renderAnswers () {
    smiles.forEach(({ emoji, counter, id }) => {
        const answer = document.createElement('div');
        answer.classList.add('answer')
        answer.dataset.id = id;
        answer.innerHTML = `
        <p>${emoji}</p>
        <span>${counter}</span>
        `;
        answers.append(answer);

    })
    answers.addEventListener('click', ({target}) => {
        if (target.matches('p')) {
            let count = target.nextElementSibling;
            count.innerHTML++;
            console.log(target.nextElementSibling)
        }
    })
}

renderAnswers();
