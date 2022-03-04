import React from "react"

function Note(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}

function createNotes(note) {
    return (
        <Note 
        // key is used for removing warning
        key={note.key}
        title={note.title}
        content={note.content}
        />
    )
}

export default createNotes;