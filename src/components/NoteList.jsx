import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, keyword, onDelete, onArchive }) {
  return (
    <>
      <h2>Active List</h2>
      <ActiveList
        notes={notes}
        keyword={keyword}
        onDelete={onDelete}
        onArchive={onArchive}
      />
      <h2>Archive List</h2>
      <ArchiveList
        notes={notes}
        keyword={keyword}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </>
  );
}

function ActiveList({ notes, keyword, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes
        .filter((note) => {
          if (keyword.length === 0) {
            return note;
          }
          return note.title.toLowerCase().includes(keyword.toLowerCase());
        })
        .map((note) =>
          !note.archived ? (
            <NoteItem
              key={note.id}
              {...note}
              onDelete={onDelete}
              onArchive={onArchive}
            />
          ) : (
            ""
          )
        )}
    </div>
  );
}

function ArchiveList({ notes, keyword, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes
        .filter((note) => {
          if (keyword.length === 0) {
            return note;
          }
          return note.title.toLowerCase().includes(keyword.toLowerCase());
        })
        .map((note) =>
          note.archived ? (
            <NoteItem
              key={note.id}
              {...note}
              onDelete={onDelete}
              onArchive={onArchive}
            />
          ) : (
            ""
          )
        )}
    </div>
  );
}

export default NoteList;
