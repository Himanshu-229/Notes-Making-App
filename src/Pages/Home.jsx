import React from 'react';
import GroupBar from '../Component/GroupBar/GroupBar';
import locksvgUrl from '../assets/lock.svg';
import imgurl from '../assets/background.svg';

const Home = () => {
  return (
    <div className="homeContainer">
      {/* GroupBar will always be visible */}
      <div className="groupBarWrapper">
        <GroupBar />
      </div>

      {/* This section will be hidden on mobile */}
      <div className="contentWrapper">
        <img className="backgroundImage" src={imgurl} alt="" />
        <h2 className="title">Pocket Notes</h2>
        <p className="description">
          Send and receive messages without keeping your phone online.
          <br />
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
        </p>

        <p className="encryptionInfo">
          <img className="lockIcon" src={locksvgUrl} alt="" style={{marginRight:"5px"}} />
          end-to-end encrypted
        </p>
      </div>
    </div>
  );
};

export default Home;
