import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([])

  function addNote(newNote) {
    setNotes(prevNote => {
      return [...prevNote, newNote]
    });
    console.log(newNote)
  }

  return (
    <div>
      <Header />
      <CreateArea 
      onAdd={addNote}
      />
      {notes.map((noteItem) => {
        return <Note title={noteItem.title} content={noteItem.content} />
      })}
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
