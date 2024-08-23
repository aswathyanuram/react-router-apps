import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ToDoAxios() {
  const [notes, setNotes] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/notes").then((response) => {
      let data = response.data;
      setNotes(data);
    });
  }, []);

  const saveNote = () => {
    axios
      .post("http://localhost:3000/note", { title: value })
      .then((response) => {
        let allNotes = response.data;
        setNotes(allNotes);
      });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={() => {
            saveNote();
          }}
        >
          SAVE
        </button>
      </div>

      <div>
        {notes.map((note) => {
          return <div>{note.title}</div>;
        })}
      </div>
    </div>
  );
}
