import React from "react";
import NoteSearch from "./NoteSearch";

function NoteAppHeader({ onSearch }) {
  return (
    <header className="note-app__header">
      <h1>Notes</h1>
      <NoteSearch onSearch={onSearch} />
    </header>
  );
}

export default NoteAppHeader;
