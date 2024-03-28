import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { useNavigate } from "react-router-dom";
import "./notes.css";

function Notes() {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  const randomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const addNote = () => {
    const newNote = {
      id: Math.random(),
      x: 0,
      y: 60,
      backgroundColor: randomColor(),
      text: "",
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleDrag = (id, ui) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, x: ui.x, y: ui.y } : note
      )
    );
  };

  const handleTextChange = (id, e) => {
    const newText = e.target.value;
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, text: newText } : note))
    );
  };

  const navigate = useNavigate();
  const backClick = () => {
    navigate("/");
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="notes-wrapper search-wrapper">
      <button onClick={addNote}>Add Note</button>
      {notes.map((note) => (
        <Draggable
          key={note.id}
          defaultPosition={{ x: note.x, y: note.y }}
          onStop={(e, ui) => handleDrag(note.id, ui)}
        >
          <div
            className="note"
            style={{ backgroundColor: note.backgroundColor }}
          >
            <textarea
              value={note.text}
              onChange={(e) => handleTextChange(note.id, e)}
            ></textarea>
            <button className="delete-btn" onClick={() => deleteNote(note.id)}>
              Delete
            </button>
          </div>
        </Draggable>
      ))}

      <div className="back-btn search-wrapper">
        <button onClick={backClick}>Back</button>
      </div>
    </div>
  );
}

export default Notes;
