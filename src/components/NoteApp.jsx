import React, { Component } from "react";
import NoteAppHeader from "./NoteAppHeader";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";

class NoteApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      keyword: "",
    };

    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
  }
  onSearchNoteHandler(keyword) {
    this.setState({ keyword });
  }
  onAddNoteHandler(note) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: Date.now(),
            ...note,
            archived: false,
            createdAt: new Date(),
          },
        ],
      };
    });
  }
  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }
  onArchiveNoteHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = !note.archived;
      }
      return note;
    });
    this.setState({ notes });
  }
  render() {
    return (
      <>
        <NoteAppHeader onSearch={this.onSearchNoteHandler} />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <NoteList
            notes={this.state.notes}
            keyword={this.state.keyword}
            onDelete={this.onDeleteNoteHandler}
            onArchive={this.onArchiveNoteHandler}
          />
        </div>
      </>
    );
  }
}

export default NoteApp;
