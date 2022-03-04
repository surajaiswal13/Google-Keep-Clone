import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import createNotes from "./Note"
import notes from "../notes.js"

console.log(notes)

function App() {
    return <div>
        <Header></Header>

        {notes.map(createNotes)}

        <Footer></Footer>
    </div>
}

export default App;