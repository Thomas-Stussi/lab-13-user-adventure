import quests from '../data.js';
import { getUser } from '../userUtils.js';

const user = getUser();

if (user.hp <= 0) {
    //game over logic here!
    alert('game over');
    alert('you had this much gold' + makeUser.gold);
    window.location('../index.html');
}

const section = document.querySelector('section');

let completedQuests = 0;

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];

    if (user.completed[quest.id]) {
        completedQuests++;
    }
}

if (completedQuests === quests.length) {
    //win message
    alert('Incredible! You win and have this much gold: ' + user.gold);
}

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];

    if (user.completed[quest.id] === true) {
        const span = document.createElement('span');
        span.textContent = quest.title;
        span.style.textDecoration = 'strikethrough';
        section.append(span);
    } else {   
        const link = document.createElement('a');
        link.textContent = quest.title;
        link.href = '/quest/?id=' + quest.id;

        section.append(link);
    }   
}