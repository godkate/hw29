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
}

renderAnswers();

answers.addEventListener('click', ({ target }) => {
    if (target.matches('p')) {
        const { id } = target.dataset;
        counter(id);
    }
})

function counter (id) {
    smiles.map((smile) => {
        if (smile.id === id) {
            return smile.id += 1;
        }
        return smile;
    })
}