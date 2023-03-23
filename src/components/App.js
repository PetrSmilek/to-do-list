import "../styles.css";
import Header from "./Header";
import Todo from "./Todo";
import Note from "./Note";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";

export default function App() {
  const LOCAL_STORAGE_KEY = "todoApp";
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log(storedNotes);
    if (storedNotes !== null || storedNotes !== undefined) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Todo onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={crypto.randomUUID()}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}
