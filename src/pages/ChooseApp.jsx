import React, { useEffect, useState } from 'react'
import PersonList from '../cmps/PersonList'
import { personService } from '../services/person-service'

export default function ChooseApp() {

    const [persons, setPersons] = useState([])

    useEffect(() => {
        const persons = personService.getPersons()
        setPersons([...persons])
    }, [])

    return (
        <section className="choose-app">
            <div className="person-list-container">
                <PersonList persons={persons} />
            </div>
        </section>
    )
}
