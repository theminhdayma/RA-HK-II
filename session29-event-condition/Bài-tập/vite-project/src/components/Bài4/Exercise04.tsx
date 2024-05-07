import React, { useState } from 'react';

export default function Exercise04() {
    const [option, setOption] = useState<string>("");

    const change = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOption(event.target.value);
    };

    return (
        <div>
            <h2>Tỉnh / Thành Phố: {option}</h2>
            <select onChange={change}>
                <option value="">Chọn Tỉnh / Thành Phố</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hà Nam">Hà Nam</option>
                <option value="Ninh Bình">Ninh Bình</option>
                <option value="Thanh Hóa">Thanh Hóa</option>
                <option value="Nghệ An">Nghệ An</option>
                <option value="Hà Tĩnh">Hà Tĩnh</option>
            </select>
        </div>
    );
}
