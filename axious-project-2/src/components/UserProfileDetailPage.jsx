// src/components/UserProfileDetailPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams to get the user ID from the URL
import './UserProfileDetailPage.css';

const UserProfileDetailPage = () => {
  const { id } = useParams(); // Get the user ID from the URL params
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the user details based on the user ID from the URL
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch user data.");
        setLoading(false);
      });
  }, [id]); // Re-fetch if the ID changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="user-profile-detail-container">
      <h1>{user.name}'s Profile</h1>
      <div className="user-profile-detail">
        <div className="user-detail-item">
          <strong>Username:</strong> {user.username}
        </div>
        <div className="user-detail-item">
          <strong>Email:</strong> {user.email}
        </div>
        <div className="user-detail-item">
          <strong>Phone:</strong> {user.phone}
        </div>
        <div className="user-detail-item">
          <strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a>
        </div>
        <div className="user-detail-item">
          <strong>Address:</strong>
          <p>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
        </div>
        <div className="user-detail-item">
          <strong>Company:</strong>
          <p>{user.company.name}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDetailPage;
