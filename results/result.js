import { getUser } from '../userUtils.js';

const user = getUser();
const restartButton = document.getElementById('restart');

let death = {
    title: 'You have been slain!',
    description: `While your efforts were valiant, the dangers of the world have laid ${user.name} low. Nicolas Cage ${user.gold} gold pieces off of your corpse`,
    image: 'https://www.placecage.com/gif/284/196'
};

let victory = {
    title: 'Victory is yours!',
    description: `Congratulations ${user.name}! Your skills are beyond compare, enjoy your victory brave adventurer. You ended with ${user.gold} gold pieces and ${user.hp} hit points.`,
    image: 'https://www.stevensegallery.com/g/155/300'
};

function renderResult(result) {
    const resultDiv = document.getElementById('result-main');
    const section = document.createElement('section');
    resultDiv.append(section);

    const title = document.createElement('div');
    title.textContent = result.title;

    const img = document.createElement('img');
    img.src = result.image;

    const description = document.createElement('div');
    description.textContent = result.description;

    section.append(title, img, description);
}

if (user.hp <= 0) {
    renderResult(death);
} else {
    renderResult(victory);
}

restartButton.addEventListener('click', () => {
    localStorage.setItem('USER', 'fresh user');
    window.location = '../index.html';
});