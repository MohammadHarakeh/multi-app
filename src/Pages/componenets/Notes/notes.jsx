import React, { useState } from "react";
import Draggable from "react-draggable";
import "./notes.css";

function Notes() {
  const [notes, setNotes] = useState([]);

  const randomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const addNote = () => {
    const newNote = {
      id: Math.random(),
      x: 20,
      y: 20,
      backgroundColor: randomColor(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleDrag = (id, e, ui) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, x: ui.x, y: ui.y } : note
      )
    );
  };

  return (
    <div className="notes-wrapper">
      <button onClick={addNote}>Add Note</button>
      {notes.map((note) => (
        <Draggable
          key={note.id}
          defaultPosition={{ x: note.x, y: note.y }}
          onStop={(e, ui) => handleDrag(note.id, e, ui)}
        >
          <div
            className="note"
            style={{ backgroundColor: note.backgroundColor }}
          >
            <textarea></textarea>
            <button className="back-calc" onClick={() => deleteNote(note.id)}>
              Delete
            </button>
          </div>
        </Draggable>
      ))}
    </div>
  );
}

export default Notes;
