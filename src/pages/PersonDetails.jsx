import { useEffect, useState } from 'react'
import { WEEK_DAYS, personService } from '../services/person-service';
import { useParams } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AppDialog from '../cmps/app-cmps/AppDialog';
import PersonEdit from '../cmps/PersonEdit';

export default function PersonDetails() {
    const [person, setPerson] = useState({});
    const { personId } = useParams();


    useEffect(() => {
        loadPerson()
    }, [])

    const loadPerson = () => {
        console.log('PersonDetails ~ personId:', personId)
        const currPerson = personService.getById(personId);
        console.log('useEffect ~ currPerson:', currPerson)
        setPerson({ ...currPerson })
    }

    const onAddPref = (personId, prefToAdd) => {
        console.log('onAddPref ~ prefToAdd:', prefToAdd)
        personService.addPersonPref(personId, prefToAdd)
        loadPerson() // TODO: check if need after Shabat
    }


    return (
        <section className="person-details">
            <div className="person-details-header flex justify-align-center">
                <h1>{person.name}</h1>
            </div>
            <div className="personal-details-main flex">

                <ul className="prefs-container clean-list">
                    {person.preferences?.map(pref => <li key={pref}>{pref}</li>)}
                </ul>
                <Tabs className={'react-tabs flex-1'}>
                    <TabList className={'react-tabs__tab-list flex'}>
                        {WEEK_DAYS.map(day => <Tab className={'react-tabs__tab flex-1'}>{day}</Tab>)}
                    </TabList>

                    {WEEK_DAYS.map((_, dayIdx) => <TabPanel>{person.preferences?.[person.prefsByDays?.[dayIdx]]}</TabPanel>)}
                </Tabs>
            </div>
            <AppDialog>
                <PersonEdit person={person} onAddPref={onAddPref} />
            </AppDialog>

        </section>
    )
}
