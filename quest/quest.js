import allQuests from '../data.js';
import { findById, renderSection } from './questUtils.js';

const nextButton = document.getElementById('next');
const main = document.querySelector('main');

//query param 
const params = new URLSearchParams(window.location.search);

const questId = params.get('id');

const questData = findById(allQuests, questId);

const sectionEl = renderSection(questData);

nextButton.addEventListener('click', () => {
    window.location = '../map';
    console.log('hello');
});

main.append(sectionEl);