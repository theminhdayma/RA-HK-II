import React, { useState } from 'react';

export default function HoverEffect() {
    const [checkHover, setCheckHover] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setCheckHover(true);
    }

    const handleMouseLeave = () => {
        setCheckHover(false);
    }

    return (
        <div>
            <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                Hover me
            </button>
            {checkHover && (
                <div style={{width: 120, position: 'relative', top: 20, background: '#f0f0f0', padding: 10, borderRadius: 10}}>
                    Tooltip content
                </div>
            )}
        </div>
    );
}
