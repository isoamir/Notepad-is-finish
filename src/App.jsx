import { useState } from "react";
import "./App.css";
import AddNote from "./Components/AddNote/AddNote";
import NoteList from "./Components/AddNote/NoteList";
import Note from "./Components/AddNote/Note";

function App() {
  const [notes, setNotes] = useState([]);
  const addNoteH = (newNote) => {
    setNotes((prevnotes) => [...prevnotes, newNote]);
  };
  console.log(notes);

  return (
    <div>
      <AddNote setNotes={setNotes} onAddNote={addNoteH} />
      <NoteList notes={notes} />
      
    </div>
  )
}

export default App;
