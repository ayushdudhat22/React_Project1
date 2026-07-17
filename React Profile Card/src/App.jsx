import React from 'react';
import './index.css'; 
import ayush from "./assets/ayush.jpg";

function App() {
  const userData = {
    name: "Ayush Dudhat",
    role: "Full Stack Developer Student",
    bio: "Currently in my 3rd semester of college, actively learning and mastering Full Stack Development.",
    avatar: ayush};

  return (
    <div className="profile-card" style={{ paddingBottom: '40px' }}>
      
      <div className="card-accent"></div>
      
      
      <div className="avatar-container">
        <img 
          src={userData.avatar} 
          alt={userData.name} 
          className="profile-avatar" 
        />
      </div>

      <div className="user-info" style={{ marginBottom: '0px' }}>
        <h2>{userData.name}</h2>
        <div className="user-tag">{userData.role}</div>
        <p className="user-bio" style={{ marginBottom: '0px' }}>"{userData.bio}"</p>
      </div>
    </div>
  );
}

export default App;