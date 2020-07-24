import { renderSection } from '../quest/questUtils.js';

const test = QUnit.test;

const quest = {
    id: 'monsters',
    title: 'A Den of Monsters',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'http://www.placekitten.com/300/300/',
    description: `
        You enter the quest chamber only to be confronted by a hoard of
        monsters. And they look hungry. What do you do?
    `,
    choices: [{
        id: 'negotiate',
        description: 'Negotiate with them',
        result: `
            Knowing the monsters are not too bright, you offer to go buy them all
            turkey dinners from the village pub. They give you 35 gold for meals
            that will never be delivered. I hope you can live with yourself. 
        `,
        hp: 0,
        gold: 35
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            Brandishing your sword you let out a warrior's cry and charge into the monsters
            hacking and slashing. Before long you stand panting gazing across the bodies of
            your vanquished foes. The bad news is you take 30 hp damage. The good news is you
            find 50 gold.
        `,
        hp: -30,
        gold: 50
    }, {
        id: 'run',
        description: 'Run away like good Sir Robin',
        result: `
            As you make a dash for the door a giant spider descends and take a bite of flesh,
            causing 50 hp damage.
        `,
        hp: -50,
        gold: 0
    }]
};

test('renderSection should match expected outerHtml', expect => {
    
    const expected = `<section>
    <div>
        A Den of Monsters
    </div>
    <img src="http://www.placekitten.com/300/300/">
    <form>
        <div>
            You enter the quest chamber only to be confronted by a hoard of
            monsters. And they look hungry. What do you do?
        </div>
        <label>
            <div>Negotiate with them</div>
            <input type="radio" value="negotiate" name="choices">
        </label>
        <label>
            <div>Fiiiiiggghhhttt!</div>
            <input type="radio" value="fight" name="choices">
        </label>
        <label>
            <div>Run away like good Sir Robin</div>
            <input type="radio" value="run" name="choices">
        </label>

        <button>Submit</button>
    </form>
</section>`.replace(/\s/g, '');

    const el = renderSection(quest);

    expect.equal(el.outerHTML.replace(/\s/g, ''), expected);
});

