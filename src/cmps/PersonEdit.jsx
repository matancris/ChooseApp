import { useEffect, useRef, useState } from 'react'



export default function PersonEdit({ person, onAddPref, removePref, updatePrefs }) {

    const [editPrefsForm, setEditPrefsForm] = useState({ addPref: '' });
    const [prefMoreMenuStatuses, setPrefMoreMenuStatuses] = useState([]);
    const [inputsOpenToggleStatuses, setInputsOpenToggleStatuses] = useState([]);
    const [updatedPersonPrefs, setUpdatedPersonPrefs] = useState([])

    const editInputRef = useRef(null)

    useEffect(() => {

        if (person.preferences) {
            setUpdatedPersonPrefs([...person.preferences])
        }

    }, [person])

    useEffect(() => {

        if (editInputRef.current) {
            editInputRef.current.focus()
        }

    }, [inputsOpenToggleStatuses])



    const handleInput = (ev) => {
        const { name, value } = ev.target


        setEditPrefsForm({
            ...editPrefsForm,
            [name]: value
        })
    }

    const onAddNewPref = () => {
        onAddPref(person.id, editPrefsForm.addPref)
        setEditPrefsForm({
            ...editPrefsForm,
            addPref: ''
        })
    }

    const editPref = ({ target }, idx) => {
        const { value } = target
        const updatedPersonPrefs = [...person.preferences];
        updatedPersonPrefs[idx] = value

        setUpdatedPersonPrefs([...updatedPersonPrefs])
    }

    const onUpdatePrefs = (idx) => {
        updatePrefs(person.id, updatedPersonPrefs)

        togglePrefEditInputs(idx)
    }


    const togglePrefMoreMenu = (idx) => {
        const prefMoreMenus = [...prefMoreMenuStatuses];
        prefMoreMenus[idx] = !prefMoreMenus[idx];

        setPrefMoreMenuStatuses([...prefMoreMenus])
    }

    const togglePrefEditInputs = (idx) => {
        const prefEditInputs = [...inputsOpenToggleStatuses];
        prefEditInputs[idx] = !prefEditInputs[idx]

        setInputsOpenToggleStatuses([...prefEditInputs])
    }

    const onRemovePref = (ev, idx) => {
        ev.stopPropagation()

        togglePrefMoreMenu(idx)
        removePref(person.id, idx)
    }


    return (
        <section className="person-edit">
            <ul className="prefs-container clean-list flex column">
                {person.preferences?.map((pref, idx) => {
                    return (
                        <div className="pref-container flex align-center space-between" key={idx}>
                            {!inputsOpenToggleStatuses[idx] &&
                                <li className="pref-item" key={idx}>{pref}</li>}
                            {inputsOpenToggleStatuses[idx] &&
                                <div className="edit-input-wrapper flex gap-4 align-center">
                                    <input
                                        ref={editInputRef}
                                        type="text"
                                        value={updatedPersonPrefs[idx]}
                                        name="editedPrefs"
                                        onChange={(ev) => editPref(ev, idx)}
                                        className="pref-item"
                                        key={idx} />
                                    <button onClick={() => onUpdatePrefs(idx)}>
                                        <span className="material-symbols-outlined">
                                            done
                                        </span>
                                    </button>
                                </div>}
                            <span
                                className="material-symbols-outlined more-icon cursor-pointer"
                                onClick={() => togglePrefMoreMenu(idx)}>
                                more_vert

                                {prefMoreMenuStatuses[idx] &&
                                    <div className="edit-menu-container flex column">
                                        <div className="edit-tag-wrapper flex align-center"
                                            onClick={() => togglePrefEditInputs(idx)}>
                                            <span>ערוך</span>
                                            {/* <span className="material-symbols-outlined">
                                                edit
                                            </span> */}
                                        </div>
                                        <div className="delete-tag-wrapper flex align-center"
                                            onClick={(ev) => onRemovePref(ev, idx)}>
                                            <span>מחק</span>
                                            {/* <span className="material-symbols-outlined">
                                                delete
                                            </span> */}
                                        </div>
                                    </div>}
                            </span>
                        </div>
                    )
                })}
            </ul>

            <div className="add-input-wrapper flex">
                <input type="text" name="addPref" value={editPrefsForm.addPref} onChange={handleInput} />
                <button onClick={onAddNewPref}>הוסף</button>
            </div>
        </section>
    )
}
