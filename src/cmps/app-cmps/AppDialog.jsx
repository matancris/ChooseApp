import React from 'react'

export default function AppDialog(props) {
  return (
    <>
    <div className="screen">
    <section className="app-dialog">
        {props.children}
    </section>
    </div>
    </>
  )
}
