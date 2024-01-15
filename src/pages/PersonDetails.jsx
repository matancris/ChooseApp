import { useEffect, useState } from 'react'
import { WEEK_DAYS, personService } from '../services/person-service';
import { useParams } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AppDialog from '../cmps/app-cmps/AppDialog';
import PersonEdit from '../cmps/PersonEdit';

export default function PersonDetails() {
    const [person, setPerson] = useState({});
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const { personId } = useParams();


    useEffect(() => {
        loadPerson()
    }, [])

    const loadPerson = () => {
        const currPerson = personService.getById(personId);
        setPerson({ ...currPerson })
    }

    const onAddPref = (personId, prefToAdd) => {
        personService.addPersonPref(personId, prefToAdd)
        loadPerson()
    }

    const removePref = (personId, prefToRemoveIdx) => {
        personService.removePersonPref(personId, prefToRemoveIdx)
        loadPerson()
    }

    const updatePrefs = (personId, updatedPrefs) => {
        personService.updatePrefs(personId, updatedPrefs)
        loadPerson()
    }


    return (
        <section className="person-details main-container">
            <div className="person-details-header flex justify-align-center full">
                <h1>{person.name}</h1>
            </div>
            <div className="personal-details-main flex">
                <div className="side-nav flex column">
                    <ul className="prefs-container clean-list flex column">
                        {person.preferences?.map((pref, idx) => <li key={idx}>{pref}</li>)}
                    </ul>
                    <button onClick={() => setIsEditDialogOpen(true)}>ערוך רשימה</button>
                </div>
                <Tabs className={'react-tabs flex-1'}>
                    <TabList className={'react-tabs__tab-list flex'}>
                        {WEEK_DAYS.map((day, idx) => <Tab className={'react-tabs__tab flex-1'} key={idx}>{day}</Tab>)}
                    </TabList>

                    {WEEK_DAYS.map((_, dayIdx) => (
                        <TabPanel key={dayIdx}>
                            <h1 className="selection-title flex justify-align-center">
                                {person.preferences?.[person.prefsByDays?.[dayIdx]]}
                            </h1>
                        </TabPanel>))}
                </Tabs>
            </div>
            <AppDialog isDialogOpen={isEditDialogOpen} onCloseDialog={() => setIsEditDialogOpen(false)}>
                <PersonEdit
                    person={person}
                    nAddPref={onAddPref}
                    removePref={removePref}
                    updatePrefs={updatePrefs} />
            </AppDialog>

        </section>
    )
}
