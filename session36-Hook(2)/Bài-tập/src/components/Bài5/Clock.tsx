import React, { useState, useEffect } from 'react';

export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {       
        setTime(new Date());       
    });

    return (
        <div>
            <h2>{time.toLocaleTimeString()}</h2>
        </div>
    );
}
