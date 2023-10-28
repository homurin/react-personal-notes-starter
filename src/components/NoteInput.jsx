import React, { Component } from "react";

class NoteInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        title: "",
        body: "",
      },
      titleLimit: 50,
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }
  onTitleChangeEventHandler(event) {
    const limit = 50;
    const title = event.target.value.slice(0, limit);
    console.log(title);
    this.setState((prevState) => {
      console.log({ ...prevState.note, title });
      return {
        note: { ...prevState.note, title },
        titleLimit: limit - title.length,
      };
    });
  }
  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      console.log({ ...prevState.note, body: event.target.value });
      return { note: { ...prevState.note, body: event.target.value } };
    });
  }
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state.note);
  }
  render() {
    return (
      <form onSubmit={this.onSubmitEventHandler}>
        <p className="note-input__title__char-limit">
          {this.state.titleLimit} character left
        </p>
        <input
          type="text"
          className="note-input__title"
          placeholder="This is title ..."
          onChange={this.onTitleChangeEventHandler}
          value={this.state.note.title}
          required
        />
        <textarea
          className="note-input__body"
          placeholder="Write your note here ..."
          onChange={this.onBodyChangeEventHandler}
          value={this.state.note.body}
        ></textarea>
        <button type="submit">Create</button>
      </form>
    );
  }
}

export default NoteInput;
