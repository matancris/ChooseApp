import { useState, useEffect } from 'react';

export default function PersonWeekEdit({ person, weekDays, updatePrefsByDays }) {
  const [updatedPrefsByDays, setUpdatedPrefsByDays] = useState([]);

  useEffect(() => {
    if (person.prefsByDays) {
      setUpdatedPrefsByDays([...person.prefsByDays]);
    }
  }, [person]);

  const onSetPrefByDay = ({ target }, dayIdx) => {
    const currPrefsByDays = [...updatedPrefsByDays]
    currPrefsByDays[dayIdx] = target.selectedIndex;

    setUpdatedPrefsByDays([...currPrefsByDays]);
  };

  return (
    <section className="person-week-edit flex column gap-16">
      <div className="day-select-list flex column gap-16">
        {weekDays.map((day, dayIdx) => (
          <div
            className="day-select-wrapper flex space-between gap-16 align-center"
            key={dayIdx}
          >
            <h3>{day}</h3>
            <select
              name="prefs"
              value={
                person.preferences &&
                person.preferences[updatedPrefsByDays[dayIdx]]
              }
              onChange={(ev) => onSetPrefByDay(ev, dayIdx)}
            >
              {person.preferences?.map((pref, idx) => (
                <option key={idx}>{pref}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <button onClick={() => updatePrefsByDays(updatedPrefsByDays)}>שמור</button>
    </section>
  );
}
