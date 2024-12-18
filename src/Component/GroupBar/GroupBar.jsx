import React, { useState, useEffect } from 'react';
import './GroupBar.css';
import CreateGroup from '../createGroup/CreateGroup';
import { Link } from 'react-router-dom';

const GroupBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [groups, setGroups] = useState([]); 


  useEffect(() => {
    const savedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    setGroups(savedGroups);
  }, []);

  useEffect(() => {
    if (groups.length > 0) {
      localStorage.setItem('groups', JSON.stringify(groups));
    }
  }, [groups]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleCreateGroup = (groupData) => {
    setGroups((prevGroups) => [...prevGroups, groupData]);
    closeModal(); 
  };

  return (
    <div className='groupBar'>
      <h1 className="header">Pocket Notes</h1>

      <div className="groupList">
        {groups.map((group, index) => (
          <Link 
            to="/notes" 
            state={{ groupName: group.groupName, groupColor: group.selectedColor }} 
            key={index}
          >
            <div className="groupNameContainer">
              <div 
                className="shortName"
                style={{ backgroundColor: group.selectedColor }} 
              >
                <h3>{group.groupName.substring(0, 2).toUpperCase()}</h3>
              </div>
              <div className="groupName">{group.groupName}</div>
            </div>
          </Link>
        ))}
      </div>


      <div className="floating-button" onClick={openModal}>
        +
      </div>


      {showModal && <CreateGroup closeModal={closeModal} onCreateGroup={handleCreateGroup} />}
    </div>
  );
};

export default GroupBar;
