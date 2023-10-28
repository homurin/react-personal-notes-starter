import React from "react";
import NoteInput from "./NoteInput";

function NoteInputBody({ addNote }) {
  return (
    <div className="note-input">
      <h2>Create Note</h2>
      <NoteInput addNote={addNote} />
    </div>
  );
}

export default NoteInputBody;
