import { useState } from 'react'
import { Tooltip } from 'react-tooltip'



export default function PersonEdit({ person, onAddPref }) {

    const [newPref, setNewPref] = useState('');
    const [prefMoreMenuStatuses, setPrefMoreMenuStatuses] = useState([]);

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

    const onOpenPrefMoreMenu = (idx) => {
        const prefMoreMenus = [...prefMoreMenuStatuses];
        prefMoreMenus[idx] = !prefMoreMenus[idx]

        setPrefMoreMenuStatuses([...prefMoreMenus])
    }


    return (
        <section className="person-edit">
            <ul className="prefs-container clean-list flex column">
                {person.preferences?.map((pref, idx) => {
                    return (
                        <div className="pref-container flex align-center space-between">
                            <li className="pref-item" key={idx}>{pref}</li>
                            <span
                                class="material-symbols-outlined more-icon"
                                onClick={() => onOpenPrefMoreMenu(idx)}>
                                more_vert
                            </span>
                            {prefMoreMenuStatuses[idx] &&
                                <div className="edit-menu-container">
                                    <div className="edit-tag-wrapper">
                                        <span>ערוך</span>
                                        <span class="material-symbols-outlined">
                                            edit
                                        </span>
                                    </div>
                                </div>}
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
