import { utilService } from './util-service';


export const personService = {
    getPersons,
    getById
}

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
        ]
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
        ]
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
        ]
    },
]
console.log('persons:', persons)


function getPersons() {
    return persons;
}

function getById(personId) {
    console.log('getById ~ personId:', personId)
    const person = persons.find(person => person.id === personId)
    console.log('getById ~ person:', person)
    return person;
}

