// src/components/Notification.jsx
import React from 'react';

const Notification = ({ notification, clearNotification, children }) => {
  return (
    <div className="notification">
      <p><strong>{notification.name}</strong>: {notification.message}</p>
      {children}
      <button onClick={() => clearNotification(notification.id)}>Clear</button>
    </div>
  );
};

export default Notification;
