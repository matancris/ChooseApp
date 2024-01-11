import { useEffect, useState } from 'react'
import { personService } from '../services/person-service';
import { useParams } from 'react-router-dom';

export default function PersonDetails() {
    const [person, setPerson] = useState({});
    const { personId } = useParams();


    useEffect(() => {
        console.log('PersonDetails ~ personId:', personId)
        const currPerson = personService.getById(personId);
        console.log('useEffect ~ currPerson:', currPerson)
        setPerson({ ...currPerson })
    }, [personId])


    return (
        <section className="person-details">
            <div className="person-details-header flex justify-align-center">
                <h1>{person.name}</h1>
            </div>

            <ul className="prefs-container clean-list">
                {person.preferences?.map(pref => <li key={pref}>{pref}</li>)}
            </ul>
        </section>
    )
}
