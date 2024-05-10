import React from 'react';

export default function Bai6() {
    const user = {
        firstName: "Nguyễn Văn",
        lastName: "Nam",
    };

    const formatName = (user) => {
        return user.firstName + " " + user.lastName;
    };

    return (
        <div>
            <div>Bài 6</div>
            <b>Họ và tên: {formatName(user)}</b>
        </div>
    );
}