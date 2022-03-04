import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import notes from "../notes.js"
import Note from "./Note"

console.log(notes)

function App() {
    return <div>
        <Header></Header>

        {notes.map(note =>
            <Note 
            // key is used for removing warning
            key={note.key}
            title={note.title}
            content={note.content}
            />
            )
        }

        <Footer></Footer>
    </div>
}

export default App;