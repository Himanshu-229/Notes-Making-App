import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import GroupBar from "../Component/GroupBar/GroupBar";
import "./Notes.css";
import { Link } from 'react-router-dom';

const Notes = () => {
  const location = useLocation();
  const { groupName, groupColor } = location.state || {}; 

  
  const [allNotes, setAllNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("allNotes")) || {};
  });

  const [inputText, setInputText] = useState("");
  const groupNotes = allNotes[groupName] || []; 

  
  const addNote = () => {
    if (inputText.trim()) {
      const newNote = {
        id: Date.now(),
        text: inputText,
        timestamp: new Date().toLocaleString(),
      };

      const updatedNotes = {
        ...allNotes,
        [groupName]: [newNote, ...groupNotes],
      };

      setAllNotes(updatedNotes);
      setInputText("");
    }
  };


  useEffect(() => {
    localStorage.setItem("allNotes", JSON.stringify(allNotes));
  }, [allNotes]);

  return (
    
    <div className="notesPage">
    <div className="compnentContainer">
      <GroupBar />
      </div>
      {/* Notes Container */}
      <div className="notesContainer">
        {/* Header Section */}
        <div className="notesHeader" >
        <Link to="/">
            <div className="backbtn" >
                ←
            </div>
           </Link>
          <div className="notesAvatar" style={{ backgroundColor: groupColor || "#ccc" }}>
            {groupName?.substring(0, 2).toUpperCase()}
          </div>
          <div className="notesTitle">{groupName}</div>
        </div>

        {/* Scrollable Notes Section */}
        <div className="notesScrollable">
          {groupNotes.map((note) => (
            <div key={note.id} className="noteCard">
              <p>{note.text}</p>
              <span className="noteTimestamp">{note.timestamp}</span>
            </div>
          ))}
        </div>

        {/* Fixed Bottom Input Section */}
        <div className="notesInputContainer">

       <textarea
            className="notesInput"
            placeholder="Enter your text here............"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addNote()}
            />
          <button className="sendButton" onClick={addNote}></button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
