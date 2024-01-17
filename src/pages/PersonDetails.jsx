import { useEffect, useState, useContext } from 'react'
import { WEEK_DAYS, personService } from '../services/person-service';
import { utilService } from '../services/util-service';
import { Link, useParams } from 'react-router-dom';
// import { MobileContext } from '../App'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AppDialog from '../cmps/app-cmps/AppDialog';
import PersonEdit from '../cmps/PersonEdit';
import PersonWeekEdit from '../cmps/PersonWeekEdit';

// TODO: no need to send personId from the child in every action, the person Id exist in this component - fix it.

export default function PersonDetails() {
    // const isMobile = useContext(MobileContext);
    // console.log('PersonDetails ~ isMobile:', isMobile)
    const [person, setPerson] = useState({});
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [isWeekEditDialogOpen, setIsWeekEditDialogOpen] = useState(false);
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

    const updatePrefsByDays = (updatedPrefsByDays) => {
        personService.updatePrefsByDays(personId, updatedPrefsByDays)
        setIsWeekEditDialogOpen(false)
        loadPerson()
    }


    return (
        <section className="person-details main-container">
            <div className="person-details-header flex justify-align-center full">
                <h1>{person.name}</h1>
                <button className="back-btn flex justify-align-center">
                    <Link to="/person">
                        <span className="material-symbols-outlined">
                            arrow_left_alt
                        </span>
                    </Link>
                </button>
            </div>
            <div className={`personal-details-main flex`}>
                <div className="side-nav flex column space-between">
                    <ul className="prefs-container clean-list flex column">
                        {person.preferences?.map((pref, idx) => <li key={idx}>{pref}</li>)}
                    </ul>
                    <button onClick={() => setIsEditDialogOpen(true)}>ערוך רשימה</button>
                </div>
                <Tabs className={'react-tabs flex-1 flex column space-between'} defaultIndex={utilService.getCurrDay()}>
                    <TabList className={'react-tabs__tab-list flex'}>
                        {WEEK_DAYS.map((day, idx) => <Tab className={'react-tabs__tab flex-1'} key={idx}>{day}</Tab>)}
                    </TabList>

                    {WEEK_DAYS.map((_, dayIdx) => (
                        <TabPanel key={dayIdx}>
                            <h1 className="selection-title flex justify-align-center">
                                {person.preferences?.[person.prefsByDays?.[dayIdx]]}
                            </h1>
                        </TabPanel>))}
                        <button onClick={() => setIsWeekEditDialogOpen(true)}>ערוך את ימי השבוע</button>
                </Tabs>
            </div>

            {/* Edit list dialog */}
            <AppDialog isDialogOpen={isEditDialogOpen} onCloseDialog={() => setIsEditDialogOpen(false)}>
                <PersonEdit
                    person={person}
                    onAddPref={onAddPref}
                    removePref={removePref}
                    updatePrefs={updatePrefs} />
            </AppDialog>

            {/* Edit week dialog */}
            <AppDialog isDialogOpen={isWeekEditDialogOpen} onCloseDialog={() => setIsWeekEditDialogOpen(false)}>
                <PersonWeekEdit
                    person={person} 
                    updatePrefsByDays={updatePrefsByDays}
                    weekDays={WEEK_DAYS}
                    />
            </AppDialog>

        </section>
    )
}
