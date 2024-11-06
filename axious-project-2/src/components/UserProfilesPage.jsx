// src/components/UserProfilesPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link to navigate to user profile detail page
import './UserProfilesPage.css';

const UserProfilesPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the API
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="user-profiles-container">
      <h1>User Profiles</h1>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <h3>{user.name}</h3>
            <p>{user.email}</p>

            {/* "View More" button now navigates to the UserProfileDetailPage */}
            <Link to={`/profile/${user.id}`} className="view-more-btn">
              View More
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfilesPage;
