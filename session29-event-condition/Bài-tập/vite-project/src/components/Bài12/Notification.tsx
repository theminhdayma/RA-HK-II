import React, { useState } from 'react';
import "./Notification.css"

export default function Notification() {
    const [showNotification, setShowNotification] = useState<boolean>(false);

    const handleShowNotification = () => {
        setShowNotification(true);

        setTimeout(() => {
            setShowNotification(false);
        }, 5000);
    }

    const handleCloseNotification = () => {
        setShowNotification(false);
    }

    return (
        <div className='bai12'>
            <button onClick={handleShowNotification}>Show notification</button>
            {showNotification && (
                <div className='content'>
                    <span>Hiển thị thông báo ở đây</span>
                    <button className='btnX' onClick={handleCloseNotification}>X</button>
                </div>
            )}
        </div>
    );
}
