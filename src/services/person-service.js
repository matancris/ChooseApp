


export const personService = {
    getPersons,
    getById,
    getIdxById,
    addPersonPref,
    removePersonPref,
    updatePrefs,
    updatePrefsByDays
}

export const WEEK_DAYS = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי'];

let persons = [
    {
        id: 'C1',
        name: 'ישי',
        preferences: [
            'פיתה עם קוטג',
            'פיתה עם חומוס',
            'לחמניה עם גבינת זיתים',
            'פיתה עם שוקולד',
            'לחמניה עם חביתה'
        ],
        prefsByDays: [3, 1, 0, 1, 2, 4] // the index is the day and the value is the pref index
    },
    {
        id: 'C2',
        name: 'איתן',
        preferences: [
            'פיתה עם אבוקדו',
            'פיתה עם גבינה צהובה',
            'לחמניה עם קוטג',
            'פיתה עם שוקולד',
            'לחמניה עם שוקולד'
        ],
        prefsByDays: [3, 1, 0, 1, 2, 4] // the index is the day and the value is the pref index
    },
    {
        id: 'C3',
        name: 'רועי',
        preferences: [
            'פיתה עם קוטג',
            'פיתה עם גבינה צהובה',
            'לחמניה עם שוקולד',
            'פיתה עם שוקולד',
            'לחמניה עם גגינה לבנה'
        ],
        prefsByDays: [3, 1, 0, 1, 2, 4] // the index is the day and the value is the pref index
    },
]
console.log('persons:', persons)


function getPersons() {
    return persons;
}

function getById(personId) {
    const person = persons.find(person => person.id === personId)
    return person;
}

function getIdxById(personId) {
    const person = persons.findIndex(person => person.id === personId)
    console.log('getById ~ person:', person)
    return person;
}

function addPersonPref(personId, prefToAdd) {
    console.log('addPersonPref ~ prefToAdd:', prefToAdd)
    const personToEditIdx = getIdxById(personId);
    console.log('addPersonPref ~ personToEditIdx:', personToEditIdx)
    if (personToEditIdx !== -1) {
        persons[personToEditIdx].preferences.push(prefToAdd)
    }
}
function removePersonPref(personId, prefToRemoveIdx) {
    const personToEditIdx = getIdxById(personId);
    if (personToEditIdx !== -1) {
        persons[personToEditIdx].preferences.splice(prefToRemoveIdx, 1)
    }
}

function updatePrefs(personId, updatedPrefs) {
    const personToEditIdx = getIdxById(personId);
    if (personToEditIdx !== -1) {
        persons[personToEditIdx].preferences = [...updatedPrefs]
    }
}

function updatePrefsByDays(personId, updatedPrefsByDays) {
    const personToEditIdx = getIdxById(personId);
    if (personToEditIdx !== -1) {
        persons[personToEditIdx].prefsByDays = [...updatedPrefsByDays]
    }
}

