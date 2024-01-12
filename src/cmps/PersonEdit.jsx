import { useState } from 'react'


export default function PersonEdit({ person, onAddPref }) {

    const [newPref, setNewPref] = useState('');
    
    const handleInput = (ev) => {
        const { name, value } = ev.target
        console.log('PersonEdit ~ newPref:', newPref)
        
        setNewPref({
            ...newPref,
            [name]: value
        })
    }
    return (
        <section className="person-edit">
            <ul className="prefs-container clean-list">
                {person.preferences?.map(pref => {
                    return (
                        <div className="pref-container">
                            <li key={pref}>{pref}</li>
                        </div>
                    )
                })}
            </ul>

            <div className="add-input-wrapper">
                <input type="text" name="pref" onChange={handleInput} />
                <button onClick={() => onAddPref(person.id, newPref.pref)}>Add</button>
            </div>
        </section>
    )
}
