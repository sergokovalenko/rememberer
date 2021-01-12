const data = [
    { name: 'Repeat first question', created: 1610467000000, iteration: 0 },
    { name: 'Repeat second question', created: Date.now(), iteration: 0 }
];

const sec = 1000;
const minute = 60 * sec;
const oneHour = 60 * minute;
const settings = [
    oneHour / 3,
    oneHour * 2,
];

const playSound = () => {
    console.log('sound started');
};

const getCardMarkup = ({ name, created, iteration }) => {
    const ellapsedTime = settings[iteration] + created - Date.now();
    let secondsLeft = Math.round(ellapsedTime / sec);

    if (ellapsedTime <= 0) {
        document.title = `Repeate ${name}`;
        secondsLeft = 0;
        playSound();
    }

    return `
        <div class="card">
            <span class="card__name">${name}</span>
            <span class="card__text">Time to next repeat:</span>
            <span class="card__time">${secondsLeft} sec</span>
        </div>
    `;
};

window.onload = () => {
    const target = document.getElementById('cards');

    target.innerHTML = data.map((el) => getCardMarkup(el)).join('\n');

    setInterval(() => {
        target.innerHTML = data.map(el => getCardMarkup(el)).join('\n');
    }, sec);
};
