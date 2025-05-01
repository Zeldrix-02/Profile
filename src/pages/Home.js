import React from 'react';
import '../App.css'; // Correct the path to App.css
import profileImage from '../assets/me.jpg'; // Correct the path to your image

const Home = () => (
  <div>
    <main>
      {/* Profile Container */}
      <div className="profile-container">
        <img 
          src={profileImage} // Use the imported image variable
          alt="Profile"
          className="profile-picture"
        />
      </div>
      {/* Main Content */}
      <h1>Welcome!</h1>
      <p>Hello, I'm Drol Jhon Dala, a web developer passionate about modern web technologies.</p>
    </main>
  </div>
);

export default Home;
