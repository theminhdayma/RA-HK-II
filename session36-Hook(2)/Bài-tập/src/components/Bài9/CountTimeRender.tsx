import React, { useEffect, useState } from 'react'

export default function CountTimeRender() {
    const [seconds, setSeconds] = useState<number>(0);

    useEffect(() => {
        setTimeout(() => {
            setSeconds(prev => prev + 1)
        }, 1000);
    });
  
    return (
      <div>
        <h4>Thời gian trôi qua: {seconds} giây</h4>
      </div>
    );
}
