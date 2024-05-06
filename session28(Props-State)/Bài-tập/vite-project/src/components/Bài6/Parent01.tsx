import React from 'react';
import Children01 from './Children01';

export default function Parent01() {
    const users = [
        {
            id: 1001,
            name: "Thế Minh",
            address: "Hà Nội",
            email: "theminh2005z@gmail.com",
        },
        {
            id: 1002,
            name: "Phùng Huy",
            address: "Thái Nguyên",
            email: "phunghuy123@gmail.com",
        },
    ];

  return (
    <div>
        <Children01 users={users} />
    </div>
  )
}
