import React, { useEffect, useState } from 'react'

export default function AppDialog(props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    setIsDialogOpen(props.isDialogOpen)
  }, [props.isDialogOpen])

  const onCloseDialog = (ev) => {
    const isCloseDialogClicked =
      ev.target.classList?.contains('screen-open') ||
      ev.target.classList?.contains('close-dialog-btn')
    if (!isCloseDialogClicked) return;

    props.onCloseDialog()
  }


  return (
    <>
      <div className={`screen ${isDialogOpen ? 'screen-open' : ''}`} onClick={onCloseDialog}>
        <section className="app-dialog flex column">
          <span className="close-dialog-btn material-symbols-outlined align-self-end cursor-pointer" onClick={onCloseDialog}>
            close
          </span>
          {props.children}
        </section>
      </div>
    </>
  )
}
