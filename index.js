const name1 = 'Nala';
const name2 = 'Warren';

const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'Marathon';
    } else if (random === 1) {
        return 'Triathlon';
    } else {
        return 'Pentathlon';
    }
};

const getTrainingDays = event => {
    let days;
    if (event === 'Marathon') {
        days = 50;
    } else if (event === 'Triathlon') {
        days = 100;
    } else if (event === 'Pentathlon') {
        days = 200;
    }
    return days;
};

const logEvent = (name, event) => {
    return `<p><strong>${name}</strong> participará en: <span>${event}</span></p>`;
};

const logTime = (name, days) => {
    return `<p><strong>${name}</strong> necesita entrenar: <span>${days} días</span></p>`;
};

const assignEvents = () => {
    const event1 = getRandEvent();
    const days1 = getTrainingDays(event1);
    
    const event2 = getRandEvent();
    const days2 = getTrainingDays(event2);

    document.getElementById('output').innerHTML = 
        logEvent(name1, event1) + logTime(name1, days1) +
        logEvent(name2, event2) + logTime(name2, days2);
};

document.getElementById('assignButton').addEventListener('click', assignEvents);
