// AddNote.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import "../css/AddNote.css";
function AddNote({ handleAddNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const characterLimit = 200;

  const handleDescriptionChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setDescription(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (title.trim().length > 0 && description.trim().length > 0) {
      handleAddNote(title, description); // Pass title and description
      setTitle(""); // Reset title
      setDescription(""); // Reset description
    }
  };

  return (
    <div className="note new">
      <input
        className="note-title-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a description..."
        value={description}
        onChange={handleDescriptionChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - description.length} Remaining</small>
        <button className="btn-save" role="button" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}

AddNote.propTypes = {
  handleAddNote: PropTypes.func.isRequired, // Specify that handleAddNote should be a function and is required
};

export default AddNote;
