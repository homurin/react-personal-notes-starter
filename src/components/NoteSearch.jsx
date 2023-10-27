import React, { Component } from "react";

class NoteSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
    this.onSearchChangeEventHandler =
      this.onSearchChangeEventHandler.bind(this);
  }
  onSearchChangeEventHandler(event) {
    const keyword = event.target.value;
    this.props.onSearch(keyword);
  }
  render() {
    return (
      <div className="note-search">
        <input
          type="text"
          onChange={this.onSearchChangeEventHandler}
          placeholder="Cari catatan ..."
        />
      </div>
    );
  }
}

export default NoteSearch;
