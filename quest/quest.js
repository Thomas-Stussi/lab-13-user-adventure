import allQuests from '../data.js';
import { findById, renderSection } from './questUtils.js';

const main = document.querySelector('main');

//query param placeholder
const questId = 'monsters';

const questData = findById(allQuests, questId);

const sectionEl = renderSection(questData);

main.append(sectionEl);