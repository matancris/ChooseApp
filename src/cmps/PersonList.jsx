import React from 'react'
import PersonPreview from './PersonPreview'

export default function PersonList({ persons }) {
    return (
        <section className="person-list">
            {persons.map(person => <PersonPreview person={person} key={person.id} />)}
        </section>
    )
}
