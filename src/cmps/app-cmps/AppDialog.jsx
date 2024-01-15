import React, { useEffect, useState } from 'react'

export default function AppDialog(props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    setIsDialogOpen(props.isDialogOpen)
  }, [props.isDialogOpen])

  const onCloseDialog = () => {
    props.onCloseDialog()
  }


  return (
    <>
      <div className={`screen ${isDialogOpen ? 'screen-open' : ''}`}>
        <section className="app-dialog flex column">
          <span className="material-symbols-outlined align-self-end cursor-pointer" onClick={onCloseDialog}>
            close
          </span>
          {props.children}
        </section>
      </div>
    </>
  )
}
