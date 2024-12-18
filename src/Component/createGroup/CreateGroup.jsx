import React, { useState } from 'react';
import './CreateGroup.css';

const CreateGroup = ({ closeModal, onCreateGroup }) => {
  const defaultColor = '#B38BFA'; 
  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [groupName, setGroupName] = useState('');

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  const handleClickColor = (e) => {
    const bgcolor = e.target.style.backgroundColor;
    setSelectedColor(bgcolor);
  };

  const handleCreateBtnClick = () => {
    if (groupName && selectedColor) {
      onCreateGroup({ groupName, selectedColor }); 
    } else if (!groupName) {
      console.log('Group name is required');
    } else if (!selectedColor) {
      console.log('Color is required');
    }
  };

  return (
    <>
      <div className="modalWrapper" onClick={closeModal}>
        <div className="UserModalContainer" onClick={handleContentClick}>
          <h3>Create New Group</h3>
          <div style={{ display: 'flex', marginTop: '20px' }}>
            <label style={{ paddingTop: '5px' }}>
              <h3>Group Name</h3>
            </label>
            <input
              className="input-tag"
              type="text"
              placeholder="Enter Group Name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            ></input>
          </div>
          <div style={{ display: 'flex', marginTop: '10px', paddingTop: '10px' }}>
            <div>
              <h3>Choose Color</h3>
            </div>
            <div style={{ display: 'flex', marginLeft: '5px' }}>
              <div
                className="colorBox"
                style={{
                  backgroundColor: '#B38BFA',
                }}
                onClick={handleClickColor}
              ></div>
              <div
                className="colorBox"
                style={{
                  backgroundColor: '#FF79F2',
                }}
                onClick={handleClickColor}
              ></div>
              <div
                className="colorBox"
                style={{
                  backgroundColor: '#43E6FC',
                }}
                onClick={handleClickColor}
              ></div>
              <div
                className="colorBox"
                style={{
                  backgroundColor: '#F19576',
                }}
                onClick={handleClickColor}
              ></div>
              <div
                className="colorBox"
                style={{
                  backgroundColor: '#0047FF',
                }}
                onClick={handleClickColor}
              ></div>
              <div
                className="colorBox"
                style={{
                  backgroundColor: '#6691FF',
                }}
                onClick={handleClickColor}
              ></div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'end', marginTop: '20px' }}>
            <div className="btn-container">
              <button type="button" onClick={handleCreateBtnClick}>
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateGroup;
