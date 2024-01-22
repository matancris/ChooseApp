import { useState, useEffect } from 'react';
import { utilService } from "../services/util-service.js";

export default function ChooseDialog({ person }) {

  const [currPref, setCurrPref] = useState('')
  const [isIntervalFinished, setIsIntervalFinished] = useState(false)

  useEffect(() => {
    if (person.preferences) {
      restartInterval()
    }
  }, [person])

  useEffect(() => {
    console.log('useEffect ~ isIntervalFinished:', isIntervalFinished)
    if (!isIntervalFinished) {
      restartInterval()
    }
  }, [isIntervalFinished])

  const restartInterval = () => {

    // setIsIntervalFinished(() => false);

    let loaderInterval = setInterval(() => {
      setTimeout(() => {
        clearInterval(loaderInterval)
        loaderInterval && setIsIntervalFinished(true);
        loaderInterval = null
      }, 5000)
      getRandomPref()
    }, 300);


  }

  const getRandomPref = () => {
    const randIdx = utilService.getRandomInt(0, person.preferences?.length);
    setCurrPref(person.preferences?.[randIdx]);
  }

  return (
    <section className={`choose-dialog flex justify-align-center column ${isIntervalFinished ? 'chosen': ''}`}>
      <h1>
        {currPref}
      </h1>
      {isIntervalFinished && <button className="last-chance-btn" onClick={() => setIsIntervalFinished(false)}>נסיון אחרון!</button>}
    </section>
  )
}
