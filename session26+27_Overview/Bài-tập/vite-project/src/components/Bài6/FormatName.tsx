import React from 'react';

type User = {
    firstName: string,
    lastName: string
}

const user: User = {
    firstName: "Nguyễn Thế",
    lastName: "Minh"
};
export default function FormatName() {

    function formatName(user: User) {
        return user.firstName + " " + user.lastName;
    }
    return (
        <div>
            Họ và tên: {formatName(user)}
        </div>
    );
}
