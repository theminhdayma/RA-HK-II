import React, { useState } from 'react';

export default function CountClick() {
    const [count, setCount] = useState<number>(0);

    const handleClick = () => {
        setCount(count+1)
    };
    document.title = `Tiêu đề: ${count.toString()}`

    return (
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}
