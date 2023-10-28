import React from "react";
import NoteList from "./NoteList";

function NoteListBody({ notes, keyword, onDelete, onArchive }) {
  const filteredNote = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );
  const activeNotes = filteredNote.filter((note) => !note.archived);
  const archiveNotes = filteredNote.filter((note) => note.archived);
  const emptyActiveNotes = activeNotes.length === 0 && (
    <p className="notes-list__empty-message">Empty note</p>
  );
  const emptyArchiveNotes = archiveNotes.length === 0 && (
    <p className="notes-list__empty-message">Empty note</p>
  );

  return (
    <>
      <h2>Active List</h2>
      {emptyActiveNotes}
      <NoteList notes={activeNotes} onDelete={onDelete} onArchive={onArchive} />
      <h2>Archive List</h2>
      {emptyArchiveNotes}
      <NoteList
        notes={archiveNotes}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </>
  );
}

export default NoteListBody;
