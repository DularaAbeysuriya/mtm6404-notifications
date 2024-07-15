// src/components/NotificationList.jsx
import React, { useState } from 'react';
import Notification from './Notification';
import notificationsData from '../notifications';

const NotificationList = () => {
  const [notifications, setNotifications] = useState(notificationsData);

  const clearNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div>
      <h2>Notifications ({notifications.length})</h2>
      <button onClick={clearAllNotifications}>Clear All</button>
      <div className="notification-list">
        {notifications.map(notification => (
          <Notification key={notification.id} notification={notification} clearNotification={clearNotification}>
            {/* Use children prop to pass additional content if needed */}
          </Notification>
        ))}
      </div>
    </div>
  );
};

export default NotificationList;
