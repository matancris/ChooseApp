import { useState } from 'react'
import { Tooltip } from 'react-tooltip'



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

    const onAddNewPref = () => {
        onAddPref(person.id, newPref.prefText)
        setNewPref({
            ...newPref,
            prefText: ''
        })
    }

    return (
        <section className="person-edit">
            <ul className="prefs-container clean-list flex column">
                {person.preferences?.map(pref => {
                    return (
                        <div className="pref-container flex align-center space-between">
                            <li className="pref-item" key={pref}>{pref}</li>
                            <Tooltip id="my-tooltip" />
                            <span data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!" class="material-symbols-outlined more-icon">
                                more_vert
                            </span>
                        </div>
                    )
                })}
            </ul>

            <div className="add-input-wrapper flex">
                <input type="text" name="prefText" value={newPref.prefText} onChange={handleInput} />
                <button onClick={onAddNewPref}>הוסף</button>
            </div>
        </section>
    )
}
